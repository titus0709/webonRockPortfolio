"use client"

import { MessageCircle } from "lucide-react"
import wa from "@/assets/whatsappLogo.png"

export function WhatsAppButton() {
  const phoneNumber = "+919566515735" // Replace with actual phone number
  const message = "Hello! I would like to inquire about website development."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-6 z-50 w-14 h-14  flex items-center justify-center  transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img
                    src={wa.src}
                    alt=""
                    className="w-24 h-24 object-cover rounded-full"
                  />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </a>
  )
}
