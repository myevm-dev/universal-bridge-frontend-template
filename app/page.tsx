import Link from "next/link"
import { Coins, Sword, Wand2, FlaskRoundIcon as Flask } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import NFTGrid from "@/components/nft-grid"
import PixelHeader from "@/components/pixel-header"

export default function Home() {
  return (
    <div className="pixel-container min-h-screen bg-zinc-900 text-white">
      <PixelHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="pixel-border p-4 bg-zinc-800">
          <h1 className="pixel-text text-3xl md:text-4xl font-bold text-center text-green-400">
            Marketplace
          </h1>
          <p className="text-center text-purple-300 mt-2">
            Collect, trade, and sell unique gaming items
          </p>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="pixel-card bg-zinc-800 border-purple-500 hover:border-green-400 transition-colors">
              <Link href="/category/swords" className="p-4 flex flex-col items-center">
                <Sword className="h-8 w-8 mb-1 text-purple-400" />
                <span className="pixel-text text-green-400">Swords</span>
              </Link>
            </Card>
            <Card className="pixel-card bg-zinc-800 border-purple-500 hover:border-green-400 transition-colors">
              <Link href="/category/staffs" className="p-4 flex flex-col items-center">
                <Wand2 className="h-8 w-8 mb-1 text-purple-400" />
                <span className="pixel-text text-green-400">Staffs</span>
              </Link>
            </Card>
            <Card className="pixel-card bg-zinc-800 border-purple-500 hover:border-green-400 transition-colors">
              <Link href="/category/potions" className="p-4 flex flex-col items-center">
                <Flask className="h-8 w-8 mb-1 text-purple-400" />
                <span className="pixel-text text-green-400">Potions</span>
              </Link>
            </Card>
            <Card className="pixel-card bg-zinc-800 border-purple-500 hover:border-green-400 transition-colors">
              <Link href="/category/all" className="p-4 flex flex-col items-center">
                <Coins className="h-8 w-8 mb-1 text-purple-400" />
                <span className="pixel-text text-green-400">All Items</span>
              </Link>
            </Card>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-col items-center mb-5">
            <h2 className="pixel-text text-2xl font-bold text-green-400 text-center">
              Featured Items
            </h2>
          </div>
          <NFTGrid />
          <div className="flex justify-center mt-4">
            <Link href="/category/all" className="text-white text-3xl hover:text-gray-300 pixel-text">
              View All
            </Link>
          </div>
        </div>
      </main>

      <footer className="pixel-border-top bg-zinc-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4">
            <Link href="/about" className="text-green-400 hover:text-green-300">
              About
            </Link>
            <Link href="/faq" className="text-green-400 hover:text-green-300">
              FAQ
            </Link>
            <Link href="/terms" className="text-green-400 hover:text-green-300">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}