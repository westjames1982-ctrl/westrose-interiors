'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

  // Gallery of project images
  const images = [
    'b46db38a-271f-48ea-b8d5-9e53d1b63dc9.jpg',
    '332083af-57a7-4ecb-8fbd-5ef0f7eac010.jpg',
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

  // Auto-scroll carousel
  useEffect(() => {
    if (!autoScroll) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [autoScroll, images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoScroll(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setAutoScroll(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setAutoScroll(false)
  }

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-teal-600">Project Gallery</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcase of completed commercial interior projects across Calgary. 
            Swipe or click to explore our portfolio.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 mb-8">
          {/* Current Image */}
          <div className="relative h-96 md:h-screen max-h-[600px] w-full">
            <Image
              src={`/images/${images[currentIndex]}`}
              alt={`Project ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              onMouseEnter={() => setAutoScroll(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-slate-900 p-3 rounded-full transition z-10"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              onMouseEnter={() => setAutoScroll(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-slate-900 p-3 rounded-full transition z-10"
            >
              ❯
            </button>

            {/* Project Title */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm font-semibold text-teal-300 mb-2">PROJECT {currentIndex + 1}</p>
              <p className="text-3xl font-bold">Commercial Interior Solution</p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="overflow-x-auto bg-slate-100 p-4">
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 relative h-20 w-20 rounded-lg overflow-hidden transition-all ${
                    currentIndex === index
                      ? 'ring-4 ring-teal-600 scale-110'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={`/images/${image}`}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 flex-wrap">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition ${
                currentIndex === index
                  ? 'bg-teal-600 w-8'
                  : 'bg-slate-300 w-3 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
