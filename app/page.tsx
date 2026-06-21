"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import Link from "next/link";
import { KleapForm } from "@/components/kleap-form";

const clothingItems = [
  { id: 1, title: "Vintage Denim Jacket", size: "M", condition: "Great", owner: "Priya Sharma", image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=400&fit=crop", tags: ["Jackets", "Unisex"] },
  { id: 2, title: "Graphic Band Tee", size: "L", condition: "Like New", owner: "Arjun Kapoor", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop", tags: ["Tops", "Music"] },
  { id: 3, title: "High-Waist Mom Jeans", size: "28", condition: "Good", owner: "Aarav Mehta", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop", tags: ["Bottoms", "Vintage"] },
  { id: 4, title: "Cozy Oversized Hoodie", size: "XL", condition: "Great", owner: "Saanvi Tiwari", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", tags: ["Hoodies", "Unisex"] },
  { id: 5, title: "Pleated Midi Skirt", size: "S", condition: "Like New", owner: "Riya Bansal", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj75?w=400&h=400&fit=crop", tags: ["Skirts", "Trendy"] },
  { id: 6, title: "Classic Leather Belt", size: "M", condition: "Good", owner: "Krish Luthra", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop", tags: ["Accessories", "Vintage"] },
];

export default function Home() {
  const [listingImage, setListingImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="relative bg-gradient-to-br from-orange-950 via-zinc-900 to-red-950 py-20 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              FlameSwap
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              The student clothing exchange platform
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Trade clothes you no longer wear with fellow students. Save money, reduce waste, and refresh your wardrobe sustainably.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#browse" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-all hover:scale-105">
                Browse Items
              </a>
              <a href="#list" className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-full font-semibold hover:bg-orange-500/10 transition-all">
                List Your Clothes
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-zinc-950">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "List Your Items", desc: "Upload photos and details of clothes you want to trade" },
              { step: "2", title: "Find Something You Like", desc: "Browse listings from other students at your school" },
              { step: "3", title: "Make the Swap", desc: "Connect, meet up, and exchange. No money needed" },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="browse" className="py-20 bg-zinc-900">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Available for Swap</h2>
            <span className="text-gray-400">{clothingItems.length} items</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clothingItems.map((item) => (
              <div key={item.id} className="bg-zinc-800 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden group border border-zinc-700">
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-black">
                    {item.condition}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">Size: {item.size} - Posted by {item.owner}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                  <Link href="/interested" className="block w-full py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors text-center">
                    I am Interested
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="list" className="py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950">
        <Container>
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">List Your Clothes</h2>
            <p className="text-gray-400 text-center mb-8">Fill out this form to add your items to the exchange</p>
            <div className="rounded-2xl p-6 sm:p-8 bg-[#141414] border border-orange-500/30 shadow-[0_0_40px_-15px_rgba(249,115,22,0.5)]">
              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">Photo of Your Item</label>
                <div className="relative">
                  {listingImage ? (
                    <div className="relative">
                      <img src={listingImage} alt="Item preview" className="w-full h-64 object-cover rounded-lg border border-orange-500/30" />
                      <button type="button" onClick={() => setListingImage(null)} className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">×</button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-orange-500/40 rounded-lg cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition-colors">
                      <svg className="w-10 h-10 text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                      <span className="text-orange-400 font-medium">Click to upload a photo</span>
                      <span className="text-gray-500 text-xs mt-1">PNG, JPG up to 10MB</span>
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (ev) => setListingImage(ev.target?.result as string);
                          reader.readAsDataURL(file);
                        }
                      }} />
                    </label>
                  )}
                </div>
              </div>
              <KleapForm
                formId="clothing-list"
                title="List Your Clothes"
                fields={[
                  { name: "name", label: "Your Name", type: "text", required: true },
                  { name: "grade", label: "Grade", type: "select", options: ["9th", "10th", "11th", "12th"], required: true },
                  { name: "item", label: "Item Name", type: "text", required: true },
                  { name: "category", label: "Category", type: "select", options: ["Tops", "Bottoms", "Jackets", "Dresses", "Shoes", "Accessories"], required: true },
                  { name: "size", label: "Size", type: "text", required: true },
                  { name: "condition", label: "Condition", type: "select", options: ["Like New", "Great", "Good", "Fair"], required: true },
                  { name: "contact", label: "Instagram or Snapchat", type: "text", required: true },
                  { name: "notes", label: "Additional Notes", type: "textarea" }
                ]}
                submitText="Submit Listing"
                successMessage="Your item has been listed. Check back soon for matches."
              />
            </div>
          </div>
        </Container>
      </section>

      <footer className="bg-[#0a0a0a] text-white py-12 border-t border-zinc-800">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">FlameSwap</h3>
              <p className="text-gray-400 mt-1">Made with love by students, for students</p>
            </div>
            <p className="text-gray-400">by Maan Ajay Sharma</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
