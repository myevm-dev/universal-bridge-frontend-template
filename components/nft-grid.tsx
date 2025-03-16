// NFTGrid.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { items } from "./items";

export default function NFTGrid() {
  const [nfts, setNfts] = useState(items);
  const [likedNfts, setLikedNfts] = useState<number[]>([]);

  const handleLike = (id: number) => {
    if (likedNfts.includes(id)) {
      setLikedNfts(likedNfts.filter((nftId) => nftId !== id));
      setNfts(nfts.map((nft) => (nft.id === id ? { ...nft, likes: nft.likes - 1 } : nft)));
    } else {
      setLikedNfts([...likedNfts, id]);
      setNfts(nfts.map((nft) => (nft.id === id ? { ...nft, likes: nft.likes + 1 } : nft)));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {nfts.map((nft) => (
        <Card key={nft.id} className="pixel-card bg-zinc-800 border-purple-500 overflow-hidden">
          <Link href={`/nft/${nft.id}`}>
            <div className="relative aspect-square">
              <img src={nft.image} alt={nft.name} className="w-full h-full object-cover pixel-image" />
              <div className="absolute top-2 right-2 bg-zinc-900/70 px-2 py-1 rounded pixel-tag">
                <span className="text-xs text-green-400">{nft.type}</span>
              </div>
              <div className="absolute bottom-2 left-2 bg-zinc-900/70 px-2 py-1 rounded pixel-tag">
                <span className="text-xs text-purple-400">{nft.supply === 1 ? "Unique" : `Supply: ${nft.supply}`}</span>
              </div>
            </div>
          </Link>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-white">{nft.name}</h3>
              <Button
                variant="ghost"
                size="icon"
                className={likedNfts.includes(nft.id) ? "text-red-500 hover:text-red-400" : "text-purple-400 hover:text-purple-300"}
                onClick={(e) => {
                  e.preventDefault();
                  handleLike(nft.id);
                }}
              >
                <Heart className={`h-5 w-5 ${likedNfts.includes(nft.id) ? "fill-red-500" : ""}`} />
                <span className="sr-only">Like</span>
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-zinc-500">Current price</p>
                <p className="text-lg font-bold text-green-400">{nft.price} ETH</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-500">Likes</p>
                <p className="text-sm text-purple-400">{nft.likes}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button className="w-full pixel-button bg-purple-600 hover:bg-purple-700">Buy Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
