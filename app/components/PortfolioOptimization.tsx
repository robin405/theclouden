import { CloudIcon, ChartBarIcon, ShieldCheckIcon, CogIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Portfolio-Wide Cloud Savings',
    description: 'Maximize ROI across investments by optimizing cloud costs across your portfolio companies.',
    icon: CloudIcon,
  },
  {
    name: 'Real-Time Performance Tracking',
    description: 'Monitor cloud performance and cost savings of each portfolio company in one consolidated dashboard.',
    icon: ChartBarIcon,
  },
  {
    name: 'Strategic Cloud Contract Negotiation',
    description: 'Secure bulk discounts and better terms from major cloud providers for all your portfolio companies.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Custom Solutions',
    description: 'Develop tailored cloud strategies for each portfolio company based on its unique needs and goals.',
    icon: CogIcon,
  },
]

export default function PortfolioOptimization() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Portfolio-Wide Cloud Optimization for VCs, PE, and Investors
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We help venture capital and private equity firms optimize cloud costs across their portfolio companies, delivering significant savings and performance enhancements.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

