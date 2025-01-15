'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = [
  { id: 'renewals', label: 'Upcoming Renewals', title: 'Save Big When It Matters Most' },
  { id: 'savings', label: 'Discover Savings', title: 'Discover how much you can save over current cloud bills' },
  { id: 'setup', label: 'New Setup Savings', title: 'Planning a new cloud infrastructure?' },
  { id: 'optimization', label: 'Cloud Optimization', title: 'Is your cloud infrastructure working for you—or against you?' },
]

const tabContent = {
  renewals: {
    description: "Your cloud contract is about to renew. What now? Before you sign on the dotted line, let us help you get the best possible deal. Don't renew at last year's rates—negotiate better pricing, improved terms, and more flexibility.",
    actions: [
      "Perform a deep-dive into your current cloud contract.",
      "Identify areas for better terms (pricing, SLAs, or support).",
      "Go head-to-head with your cloud provider to secure maximum discounts.",
    ],
    cta: { text: "Book a Negotiator Now", href: "#" },
  },
  savings: {
    description: "You're probably paying for things you don't even realize—unused storage, idle compute instances, data egress fees. Let us find those hidden savings.",
    actions: [
      "Audit your cloud environment for underutilized resources and wasted spend.",
      "Provide quick, actionable fixes for immediate cost reductions.",
      "Deliver a detailed savings report with strategies for continuous optimization.",
    ],
    cta: { text: "Sign Up for Audit", href: "#" },
  },
  setup: {
    description: "The decisions you make now will have long-lasting cost implications. Set up your cloud environment with the right structure from day one.",
    actions: [
      "Design a cost-efficient, scalable cloud architecture tailored to your business needs.",
      "Guide you through vendor selection and secure favorable terms from the start.",
      "Ensure your infrastructure is set for growth without runaway costs.",
    ],
    cta: { text: "Schedule Exploratory Call", href: "#" },
  },
  optimization: {
    description: "Most cloud environments evolve over time, often becoming inefficient. We'll streamline your setup and ensure you're not overspending on unnecessary resources.",
    actions: [
      "Right-size your resources, adjusting over-provisioned instances.",
      "Implement auto-scaling and other automation to optimize performance and cost.",
      "Provide ongoing monitoring to keep costs low as you scale.",
    ],
    cta: { text: "Schedule Exploratory Call", href: "#" },
  },
}

export default function WhyCloudNegotiator() {
  const [activeTab, setActiveTab] = useState('renewals')

  return (
    <section className="bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">When do you need a cloud negotiator</h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-4 px-1 text-sm font-medium text-center focus:outline-none ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {tabs.find(tab => tab.id === activeTab)?.title}
            </h3>
            <p className="text-gray-600 mb-6">{tabContent[activeTab as keyof typeof tabContent].description}</p>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">What We Do:</h4>
            <ul className="list-disc pl-5 mb-6 text-gray-600">
              {tabContent[activeTab as keyof typeof tabContent].actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
            <Link
              href={tabContent[activeTab as keyof typeof tabContent].cta.href}
              className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
            >
              {tabContent[activeTab as keyof typeof tabContent].cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

