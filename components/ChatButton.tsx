"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    // Here you would typically open your chat interface
    console.log('Chat button clicked')
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={handleClick}
        className="rounded-full w-16 h-16 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition duration-300"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  )
}

export default ChatButton