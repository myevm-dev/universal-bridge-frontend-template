import Link from "next/link"
import { ArrowLeft, Heart, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PixelHeader from "@/components/pixel-header"

// Sample NFT data - in a real app, this would come from an API or database
const nft = {
  id: 1,
  name: "Flaming Sword",
  type: "Sword",
  price: 0.25,
  image: "/placeholder.svg?height=600&width=600",
  creator: "PixelMaster",
  owner: "CryptoCollector",
  description:
    "A legendary sword imbued with the essence of fire. This weapon grants its wielder +5 attack and a 15% chance to inflict burn damage on enemies.",
  likes: 42,
  created: "2025-02-15",
  supply: 1,
  attributes: {
    power: 85,
    ability: "Ignite",
    level: 20,
  },
  history: [
    { event: "Minted", from: "PixelMaster", to: "PixelMaster", price: "-", date: "2025-02-15" },
    { event: "Listed", from: "PixelMaster", to: "-", price: "0.25 ETH", date: "2025-02-15" },
  ],
}

export default function NFTDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="pixel-container min-h-screen bg-zinc-900 text-white">
      <PixelHeader />

      <main className="container mx-auto px-4 py-8">
        <Link href="/category/all" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="pixel-border bg-zinc-800 p-4">
            <div className="aspect-square relative">
              <img
                src={nft.image || "/placeholder.svg"}
                alt={nft.name}
                className="w-full h-full object-contain pixel-image"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button variant="ghost" size="icon" className="bg-zinc-900/70 text-purple-400 hover:text-purple-300">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-zinc-900/70 text-purple-400 hover:text-purple-300">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 bg-zinc-900/70 px-2 py-1 rounded pixel-tag">
                <span className="text-xs text-purple-400">{nft.supply === 1 ? "Unique" : `Supply: ${nft.supply}`}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="pixel-border bg-zinc-800 p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="pixel-text text-3xl font-bold text-green-400 mb-1">{nft.name}</h1>
                  <p className="text-sm text-zinc-400">
                    Created by <span className="text-purple-400">{nft.creator}</span> • Owned by{" "}
                    <span className="text-purple-400">{nft.owner}</span>
                  </p>
                </div>
                <div className="bg-zinc-900 px-3 py-1 rounded pixel-tag">
                  <span className="text-sm text-green-400">{nft.type}</span>
                </div>
              </div>

              <p className="mb-6 text-zinc-300">{nft.description}</p>

              <div className="mb-6">
                <p className="text-sm text-zinc-400 mb-1">Current price</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-green-400 mr-2">{nft.price} ETH</span>
                  <span className="text-zinc-400">(≈ $450.00)</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 pixel-button bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
                <Button className="flex-1 pixel-button bg-green-600 hover:bg-green-700">Make Offer</Button>
              </div>
            </div>

            <Tabs defaultValue="attributes" className="pixel-border bg-zinc-800">
              <TabsList className="w-full grid grid-cols-3 bg-zinc-900">
                <TabsTrigger
                  value="attributes"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Attributes
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="attributes" className="p-4">
                <div className="grid grid-cols-3 gap-4">
                  <Card className="pixel-card bg-zinc-900 border-purple-500">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm text-zinc-400 mb-1">Power</p>
                      <p className="text-xl font-bold text-green-400">{nft.attributes.power}</p>
                    </CardContent>
                  </Card>
                  <Card className="pixel-card bg-zinc-900 border-purple-500">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm text-zinc-400 mb-1">Ability</p>
                      <p className="text-xl font-bold text-purple-400">{nft.attributes.ability}</p>
                    </CardContent>
                  </Card>
                  <Card className="pixel-card bg-zinc-900 border-purple-500">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm text-zinc-400 mb-1">Level</p>
                      <p className="text-xl font-bold text-green-400">{nft.attributes.level}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="details" className="p-4">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Contract Address</span>
                    <span className="text-purple-400 truncate max-w-[200px]">0x1a2b...3c4d</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Token ID</span>
                    <span className="text-purple-400">{nft.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Token Standard</span>
                    <span className="text-purple-400">ERC-721</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Blockchain</span>
                    <span className="text-purple-400">Ethereum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Created</span>
                    <span className="text-purple-400">{nft.created}</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="p-4">
                <div className="space-y-4">
                  {nft.history.map((item, index) => (
                    <div key={index} className="border-b border-zinc-700 pb-4 last:border-0">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-green-400">{item.event}</span>
                        <span className="text-purple-400">{item.date}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">
                          {item.from} {item.to !== "-" ? `→ ${item.to}` : ""}
                        </span>
                        <span className="text-zinc-300">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

