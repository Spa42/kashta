'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

export default function BookNowWidget() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Simulated unavailable dates (you can replace this with actual data from your backend)
  const unavailableDates = [
    new Date(2024, 10, 5),
    new Date(2024, 10, 6),
    new Date(2024, 10, 7),
  ]

  const handleDateSelect = (dates: Date[] | undefined) => {
    if (dates) {
      setSelectedDates(dates)
    }
  }

  const handleSubmit = async () => {
    if (selectedDates.length === 0) {
      setError('Please select at least one date')
      return
    }

    setIsSubmitting(true)
    setError(null)

    const formattedDates = selectedDates.map(date => 
      date.toISOString().split('T')[0]
    )

    try {
      const response = await fetch('/api/book-dates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dates: formattedDates }),
      })

      if (!response.ok) {
        throw new Error('Failed to book dates')
      }

      // Handle successful booking
      alert('Dates booked successfully!')
      setSelectedDates([])
    } catch (err) {
      setError('An error occurred while booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some(unavailableDate => 
      unavailableDate.toDateString() === date.toDateString()
    )
  }

  return (
    <div className="book-now-widget max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Calendar
          mode="multiple"
          selected={selectedDates}
          onSelect={handleDateSelect}
          className="rounded-md border"
          disabled={isDateUnavailable}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
        />
      </div>
      {selectedDates.length > 0 && (
        <div className="px-4 py-2 bg-gray-100">
          <h3 className="text-sm font-semibold mb-1">Selected Dates:</h3>
          <ul className="text-sm">
            {selectedDates.map(date => (
              <li key={date.toISOString()}>{date.toLocaleDateString()}</li>
            ))}
          </ul>
        </div>
      )}
      {error && <p className="text-red-500 text-sm px-4 py-2">{error}</p>}
      <div className="p-4">
        <Button 
          className="w-full" 
          onClick={handleSubmit}
          disabled={isSubmitting || selectedDates.length === 0}
        >
          {isSubmitting ? 'Booking...' : 'Book Now'}
        </Button>
      </div>
    </div>
  )
}