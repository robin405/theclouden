'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    requirements: [],
  })

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox'
        ? checked
          ? [...prevState.requirements, value]
          : prevState.requirements.filter(item => item !== value)
        : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Start Your Cloud Savings Today</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name *</label>
              <input
                type="text"
                name="firstName"
                id="first-name"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name *</label>
              <input
                type="text"
                name="lastName"
                id="last-name"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.email}
              />
              <p className="mt-1 text-xs text-gray-500">Your information is private and confidential with us.</p>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">Company name *</label>
            <input
              type="text"
              name="companyName"
              id="company-name"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              onChange={handleChange}
              value={formData.companyName}
            />
          </div>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-gray-700">Choose as per your requirements</legend>
            <div className="mt-2 space-y-2">
              {['Audit to discover savings', 'Renewal Negotiator', 'Cloud Cost & Terms Negotiator', 'New Cloud Setup Negotiator', 'Others Niche Requirements'].map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    id={option.toLowerCase().replace(/ /g, '-')}
                    name="requirements"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    value={option}
                    onChange={handleChange}
                    checked={formData.requirements.includes(option)}
                  />
                  <label htmlFor={option.toLowerCase().replace(/ /g, '-')} className="ml-3 text-sm text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <p className="mt-2 text-sm text-gray-500">We can help in many ways to solve your cloud issues, feel free to discuss.</p>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

