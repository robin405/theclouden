import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Free Cloud Waste Challenge',
    href: '#',
    priceMonthly: 'Free',
    description: 'Discover how much you\'re overspending on cloud',
    includedFeatures: [
      'Free Cost Analysis',
      'Cloud Usage Review',
      'Overprovisioning Check',
      'No Strings Attached',
    ],
  },
  {
    name: 'Entry-Level Audit',
    href: '#',
    priceMonthly: '$999',
    description: 'Cloud Savings Discovery (Your Quick Win)',
    includedFeatures: [
      'Cloud Savings Audit',
      'Identify Immediate Savings',
      'Monthly Reports',
      'Delivered in 1 Week',
    ],
  },
  {
    name: 'Pro Renewal Negotiator',
    href: '#',
    priceMonthly: '$5K - $10K',
    description: 'Maximize Your Cloud Renewals (Save Big)',
    includedFeatures: [
      'Contract Negotiation',
      'Best Deals for Your Cloud Renewals',
      'Flexible Terms',
      'Long-Term Savings',
    ],
  },
  {
    name: 'Custom Cloud Negotiator',
    href: '#',
    priceMonthly: 'Starting at $10,000',
    description: 'Tailored Cloud Savings (All-in Solution)',
    includedFeatures: [
      'Advanced Cloud Strategy',
      'Ongoing Optimization',
      'Migration Support',
      'Dedicated Cloud Team',
    ],
  },
]

export default function Pricing() {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Cloud Services Pricing</h2>
            <p className="mt-4 text-xl text-gray-600">
              These are sample price ranges. Actuals may vary after consultation.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{tier.name}</h3>
                  <p className="mt-6 text-base text-gray-500">{tier.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">{tier.priceMonthly}</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-4">
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={tier.href}
                    className="mt-8 block w-full bg-gray-800 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-gray-900"
                  >
                    {tier.name === 'Free Cloud Waste Challenge' ? 'Get Free Audit' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

