
"use client";

import { useEffect, useRef } from "react";
// @ts-ignore: CSS module declarations are provided by the Next.js type environment.
import "./CursorGrid.css";

interface CursorGridProps {
  cellSize?: number;
  color?: string;
  gridColor?: string;
  radius?: number;
  falloff?: "linear" | "smooth" | "sharp";
  highlight?: "area" | "cell";
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  gridStyle?: "lines" | "dashed" | "dots" | "crosses";
  cellRadius?: number;
  cellGap?: number;
  spotlight?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  ambient?: number;
  edgeFade?: number;
  intro?: boolean;
  lightMode?: boolean;
  dpr?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function CursorGrid({
  cellSize = 60,
  color,
  gridColor,
  radius = 140,
  falloff = "smooth",
  highlight = "area",
  holdTime = 400,
  fadeDuration = 800,
  lineWidth = 1,
  maxOpacity = 1,
  fillOpacity = 0.06,
  gridOpacity = 0.08,
  gridStyle = "lines",
  cellRadius = 0,
  cellGap = 0,
  spotlight = 0.6,
  clickPulse = true,
  pulseSpeed = 600,
  ambient = 0,
  edgeFade = 0.2,
  intro = true,
  lightMode = false,
  dpr,
  children,
  className = "",
  style,
}: CursorGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const settingsRef = useRef({
    cellSize,
    color: color || (lightMode ? "#18181b" : "#ffffff"),
    gridColor: gridColor || color || (lightMode ? "#18181b" : "#ffffff"),
    radius,
    falloff,
    highlight,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    gridStyle,
    cellRadius,
    cellGap,
    spotlight,
    clickPulse,
    pulseSpeed,
    ambient,
    edgeFade,
    intro,
    lightMode,
    dpr,
  });

  settingsRef.current = {
    cellSize,
    color: color || (lightMode ? "#18181b" : "#ffffff"),
    gridColor: gridColor || color || (lightMode ? "#18181b" : "#ffffff"),
    radius,
    falloff,
    highlight,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    gridStyle,
    cellRadius,
    cellGap,
    spotlight,
    clickPulse,
    pulseSpeed,
    ambient,
    edgeFade,
    intro,
    lightMode,
    dpr,
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });

    if (!ctx) {
      console.error("CursorGrid: Canvas 2D is unavailable.");
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let ratio = 1;
    let raf = 0;
    let visible = true;
    let destroyed = false;

    const pointer = {
      x: -1000,
      y: -1000,
      inside: false,
      lastMove: 0,
    };

    const pulses: {
      x: number;
      y: number;
      time: number;
    }[] = [];

    const getEase = (value: number) => {
      const t = clamp(value, 0, 1);

      if (settingsRef.current.falloff === "sharp") {
        return t * t * t;
      }

      if (settingsRef.current.falloff === "linear") {
        return t;
      }

      return t * t * (3 - 2 * t);
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      ratio = Math.min(
        settingsRef.current.dpr ||
          window.devicePixelRatio ||
          1,
        2
      );

      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);

      canvas.style.width = "100%";
      canvas.style.height = "100%";

      draw();
    };

    const drawGrid = () => {
      const s = settingsRef.current;
      const size = Math.max(8, s.cellSize);

      const cols = Math.ceil(width / size) + 1;
      const rows = Math.ceil(height / size) + 1;

      const offsetX = (width - (cols - 1) * size) / 2;
      const offsetY = (height - (rows - 1) * size) / 2;

      ctx.strokeStyle = s.gridColor;
      ctx.fillStyle = s.gridColor;
      ctx.lineWidth = Math.max(0.25, s.lineWidth);
      ctx.globalAlpha = s.gridOpacity;

      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const x = offsetX + col * size;
          const y = offsetY + row * size;

          if (s.gridStyle === "dots") {
            ctx.beginPath();
            ctx.arc(x, y, Math.max(1, s.lineWidth * 1.25), 0, Math.PI * 2);
            ctx.fill();
          } else if (s.gridStyle === "crosses") {
            const arm = size * 0.1;

            ctx.beginPath();
            ctx.moveTo(x - arm, y);
            ctx.lineTo(x + arm, y);
            ctx.moveTo(x, y - arm);
            ctx.lineTo(x, y + arm);
            ctx.stroke();
          }
        }
      }

      if (s.gridStyle === "lines" || s.gridStyle === "dashed") {
        ctx.beginPath();

        if (s.gridStyle === "dashed") {
          ctx.setLineDash([size / 6, size / 6]);
        }

        for (let col = 0; col <= cols; col++) {
          const x = offsetX + col * size;
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }

        for (let row = 0; row <= rows; row++) {
          const y = offsetY + row * size;
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }

        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.globalAlpha = 1;
    };

    const drawHighlights = (now: number) => {
      const s = settingsRef.current;
      const size = Math.max(8, s.cellSize);

      const elapsed = now - pointer.lastMove;

      let pointerOpacity = 0;

      if (pointer.inside || elapsed < s.holdTime + s.fadeDuration) {
        pointerOpacity =
          elapsed <= s.holdTime
            ? 1
            : 1 - clamp(
                (elapsed - s.holdTime) /
                  Math.max(16, s.fadeDuration),
                0,
                1
              );
      }

      if (pointerOpacity > 0) {
        const cols = Math.ceil(width / size) + 1;
        const rows = Math.ceil(height / size) + 1;

        const offsetX = (width - (cols - 1) * size) / 2;
        const offsetY = (height - (rows - 1) * size) / 2;

        const minCol = Math.max(
          0,
          Math.floor((pointer.x - s.radius - offsetX) / size)
        );

        const maxCol = Math.min(
          cols,
          Math.ceil((pointer.x + s.radius - offsetX) / size)
        );

        const minRow = Math.max(
          0,
          Math.floor((pointer.y - s.radius - offsetY) / size)
        );

        const maxRow = Math.min(
          rows,
          Math.ceil((pointer.y + s.radius - offsetY) / size)
        );

        for (let row = minRow; row < maxRow; row++) {
          for (let col = minCol; col < maxCol; col++) {
            const x = offsetX + col * size;
            const y = offsetY + row * size;

            const cx = x + size / 2;
            const cy = y + size / 2;

            const distance = Math.hypot(
              cx - pointer.x,
              cy - pointer.y
            );

            if (
              s.highlight === "cell"
                ? Math.floor((pointer.x - offsetX) / size) !== col ||
                  Math.floor((pointer.y - offsetY) / size) !== row
                : distance > s.radius
            ) {
              continue;
            }

            const intensity =
              s.highlight === "cell"
                ? 1
                : getEase(1 - distance / s.radius);

            const alpha =
              intensity * pointerOpacity;

            if (alpha <= 0) continue;

            ctx.save();

            const inset = Math.max(0, s.cellGap);
            const boxSize = size - inset * 2;

            ctx.globalAlpha = alpha * s.fillOpacity;
            ctx.fillStyle = s.color;

            if (s.cellRadius > 0) {
              const r = Math.min(s.cellRadius, boxSize / 2);

              ctx.beginPath();
              ctx.roundRect(
                x + inset,
                y + inset,
                boxSize,
                boxSize,
                r
              );
              ctx.fill();
            } else {
              ctx.fillRect(
                x + inset,
                y + inset,
                boxSize,
                boxSize
              );
            }

            ctx.globalAlpha = alpha * s.maxOpacity;
            ctx.strokeStyle = s.color;
            ctx.lineWidth = s.lineWidth;

            ctx.beginPath();

            if (s.cellRadius > 0 || s.cellGap > 0) {
              const r = Math.min(
                s.cellRadius,
                boxSize / 2
              );

              ctx.roundRect(
                x + inset,
                y + inset,
                boxSize,
                boxSize,
                r
              );
            } else if (s.gridStyle === "dots") {
              ctx.arc(cx, cy, 2, 0, Math.PI * 2);
            } else {
              ctx.rect(x, y, size, size);
            }

            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Cursor spotlight
      if (pointerOpacity > 0 && s.spotlight > 0) {
        const gradient = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          s.radius
        );

        gradient.addColorStop(0, s.color);
        gradient.addColorStop(1, "transparent");

        ctx.globalAlpha = pointerOpacity * s.spotlight * 0.12;
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;
      }

      // Click pulse animation
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        const elapsed = (now - pulse.time) / 1000;
        const pulseRadius = elapsed * s.pulseSpeed;
        const maxRadius = Math.hypot(width, height);

        if (pulseRadius > maxRadius) {
          pulses.splice(i, 1);
          continue;
        }

        const opacity = Math.pow(
          1 - pulseRadius / maxRadius,
          1.5
        );

        ctx.beginPath();
        ctx.arc(
          pulse.x,
          pulse.y,
          pulseRadius,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = opacity * 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };

    function draw() {
      if (destroyed || !ctx) return;

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, width, height);

      drawGrid();
      drawHighlights(performance.now());

      ctx.globalAlpha = 1;
    }

    const animate = () => {
      raf = 0;

      if (destroyed || !visible || document.hidden) return;

      draw();

      const now = performance.now();
      const s = settingsRef.current;

      const pointerActive =
        pointer.inside ||
        now - pointer.lastMove <
          s.holdTime + s.fadeDuration;

      const pulseActive = pulses.length > 0;

      if (pointerActive || pulseActive) {
        raf = requestAnimationFrame(animate);
      }
    };

    const wake = () => {
      if (!raf && visible && !document.hidden) {
        raf = requestAnimationFrame(animate);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const inside =
        x >= 0 &&
        y >= 0 &&
        x <= rect.width &&
        y <= rect.height;

      if (!inside) {
        if (pointer.inside) {
          pointer.inside = false;
          wake();
        }
        return;
      }

      pointer.x = x;
      pointer.y = y;
      pointer.inside = true;
      pointer.lastMove = performance.now();

      wake();
    };

    const onPointerDown = (event: PointerEvent) => {
      const s = settingsRef.current;

      if (!s.clickPulse || reducedMotion) return;

      const rect = container.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (
        x < 0 ||
        y < 0 ||
        x > rect.width ||
        y > rect.height
      ) {
        return;
      }

      pulses.push({
        x,
        y,
        time: performance.now(),
      });

      wake();
    };

    const onPointerLeave = () => {
      pointer.inside = false;
      wake();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else {
        wake();
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      wake();
    });

    resizeObserver.observe(container);

    window.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });

    window.addEventListener("pointerdown", onPointerDown, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "pointerleave",
      onPointerLeave
    );

    document.addEventListener(
      "visibilitychange",
      onVisibilityChange
    );

    resize();

    if (intro && !reducedMotion) {
      pointer.lastMove = performance.now();
      pointer.x = width / 2;
      pointer.y = height / 2;
      pointer.inside = false;
    }

    // Initial render
    draw();

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);

      resizeObserver.disconnect();

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);

      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave
      );

      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`cursor-grid ${className}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="cursor-grid__canvas"
        aria-hidden="true"
      />

      {children && (
        <div className="cursor-grid__content">
          {children}
        </div>
      )}
    </div>
  );
}
