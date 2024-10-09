"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, Moon, Sun, X } from 'lucide-react'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/research', label: 'Research' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
    { href: '/tools', label: 'Tools' },
    { href: '/portfolio', label: 'Portfolio' },
  ]

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-purple-600 to-blue-500">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="https://i.ibb.co/1LkDf4r/IMG-2258.png" alt="AI Central Logo" className="h-10 mr-3" />
            <span className="text-2xl font-bold text-white">AI Central</span>
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white hover:text-gray-200">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-4 text-white hover:text-gray-200"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Link href="/contact">
              <Button variant="secondary">Get Started</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-4 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white hover:text-gray-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header