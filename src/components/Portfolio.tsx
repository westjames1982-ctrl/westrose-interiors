'use client'

import Image from 'next/image'
import { useState } from 'react'
import fs from 'fs'
import path from 'path'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Get list of images from public/images
  const images = [
    'b46db38a-271f-48ea-b8d5-9e53d1b63dc9.jpg',
    '332083af-57a7-4ecb-8fbd-5ef0f7eac010.jpg',
    '83e77e78-11a4-4dc7-9c3b-b8bf1fd967dd.jpg',
    '2e8719ef-6d31-468d-99ae-f77145e2b6da.jpg',
    'e1d8009a-4a10-461a-9a1b-92ec69de4014.jpg',
    'dce911e7-9280-49e6-8344-ace02779e5c3.jpg',
    '79036781-e20d-49e4-b538-ad59e7865b1e.jpg',
    'c2317f7f-330d-42c9-b4c9-537e01c37645.jpg',
    '247ec0ba-3e9d-4553-b5d6-304783495e62.jpg',
    'cf6c2d7d-76e2-47df-ac1e-c05c5650dc37.jpg',
    '851a9ee0-837f-455b-a4e4-ecf694e0617a.jpg',
    'c747cc0f-ef6c-4bf5-bf91-ff37e14f6cba.jpg',
    '915aec68-c9dd-4fea-89ed-e97efba8be2a.jpg',
    'd91a96d6-f198-4b3e-a3ba-b9caf80baf31.jpg',
    'a0d598f7-6ab0-4617-b722-fa04ba4a9bc6.jpg',
    '540de1cd-4ab5-4f01-943e-d03e6f0e6618.jpg',
    'b3438fd3-4c54-411a-8879-3d50b0c7ea23.jpg',
    '58021682-1b91-44b1-a95f-e9caedbfc78f.jpg',
    '01e0f9c5-e3c9-4b12-91ad-97eb5e42a9ff.jpg',
    'eb5dd98a-35d2-43df-ae9a-043593ae625e.jpg',
    '59fb4ec2-c51e-4e8b-81a2-316e2ebb4c0a.jpg',
    '2f31a232-d545-4d4a-8455-2255aeda6876.jpg',
  ]

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-teal-600">Portfolio</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcase of completed commercial interior projects across Calgary and surrounding areas. 
            Each project reflects our commitment to excellence and professional execution.
          </p>
        </div>

        <div className="grid-gallery">
          {images.map((image, index) => (
            <div
              key={index}
              className="card-shadow rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(`/images/${image}`)}
            >
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <Image
                  src={`/images/${image}`}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition text-lg font-bold">
                    View
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-slate-900 font-semibold">Project {index + 1}</p>
                <p className="text-sm text-slate-600">Commercial Interior Solution</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-96 md:h-screen">
              <Image
                src={selectedImage}
                alt="Project Detail"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-teal-400"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
