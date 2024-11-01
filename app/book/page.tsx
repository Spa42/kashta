'use client'

import BookNowWidget from '@/components/book-now-widget'

export default function BookPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Book Your Stay</h1>
        <div className="flex justify-center">
          <BookNowWidget />
        </div>
      </div>
    </div>
  )
} 