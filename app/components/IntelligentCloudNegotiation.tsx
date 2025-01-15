import { ChartBarIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Data Analysis',
    description: 'Cloud experts and AI algorithms identify cost-saving opportunities across your entire cloud infrastructure, giving you a clear view of where you can save.',
    icon: ChartBarIcon,
  },
  {
    name: 'Performance Tracking',
    description: 'Real-time monitoring of cloud usage helps you optimize underutilized resources, ensuring maximum efficiency and better performance across the board.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Hidden Pricing Knowledge',
    description: 'Our deep experience in cloud pricing allows us to uncover hidden discounts and pricing structures that most companies miss out on. We use this expertise to your advantage.',
    icon: CurrencyDollarIcon,
  },
]

export default function IntelligentCloudNegotiation() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Approach</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Intelligent Cloud Negotiation Backed by
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
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
  )
}

