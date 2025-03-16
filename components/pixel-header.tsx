"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PixelHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-zinc-800 pixel-border-bottom sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="pixel-text text-xl font-bold text-green-400">Marketplace</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search items..."
                className="w-64 bg-zinc-700 border-purple-500 focus:border-green-400 text-white"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/category/all" className="text-white hover:text-purple-300">
                Marketplace
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Link href="/category/all">
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-300">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/my-collection">
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-300">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button className="pixel-button bg-purple-600 hover:bg-purple-700">Connect</Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 pixel-border-top">
          <div className="container mx-auto px-4 py-4">
            <div className="relative mb-4">
              <Input
                type="search"
                placeholder="Search items..."
                className="w-full bg-zinc-700 border-purple-500 focus:border-green-400 text-white"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
            </div>
            <nav className="flex flex-col space-y-4 mb-4">
              <Link
                href="/category/all"
                className="text-white hover:text-purple-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
            </nav>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Link href="/category/all">
                  <Button variant="ghost" size="icon" className="text-white hover:text-purple-300">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/my-collection">
                  <Button variant="ghost" size="icon" className="text-white hover:text-purple-300">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <Button className="pixel-button bg-purple-600 hover:bg-purple-700">Connect</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

