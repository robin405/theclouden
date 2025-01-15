'use client'

import { motion } from 'framer-motion'
import { ChartPieIcon, BanknotesIcon, EyeIcon, CogIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const insights = [
  {
    label: 'Cloud Spend',
    count: '28%',
    description: 'of Cloud Spend is Wasted',
    text: 'More than a quarter of businesses\' cloud spend is wasted due to inefficiencies and lack of optimization.',
    icon: ChartPieIcon,
    color: 'bg-orange-600',
  },
  {
    label: 'Overspend',
    count: '80%',
    description: 'of Companies Overspend',
    text: '80% of businesses overspend by 20-50% on their cloud services due to poor management.',
    icon: BanknotesIcon,
    color: 'bg-red-600',
  },
  {
    label: 'Visibility',
    count: '70%',
    description: 'Lack Cloud Spend Visibility',
    text: '70% of companies are unsure of their actual cloud spend, leading to missed opportunities for savings.',
    icon: EyeIcon,
    color: 'bg-green-600',
  },
  {
    label: 'Complexity',
    count: '59%',
    description: 'Use 3+ Tools to Manage Cloud',
    text: '59% of organizations use multiple tools to manage cloud costs, creating unnecessary complexity.',
    icon: CogIcon,
    color: 'bg-indigo-600',
  },
  {
    label: 'Forecast Variance',
    count: '88%',
    description: 'Variance in Cloud Spend',
    text: '88% of companies experience significant variance between their forecasted and actual cloud spend.',
    icon: ChartBarIcon,
    color: 'bg-cyan-600',
  },
  {
    label: 'Cost Allocation',
    count: '22%',
    description: 'Allocate More than 75% of Costs',
    text: 'Only 22% of companies allocate more than 75% of their cloud costs, missing optimization opportunities.',
    icon: CurrencyDollarIcon,
    color: 'bg-orange-600',
  },
]

export default function CloudCostInsights() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Cloud Cost Insights</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${item.color} rounded-md p-3`}>
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{item.label}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{item.count}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{item.description}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

