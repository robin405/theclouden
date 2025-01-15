import { CloudIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Cloud Optimization',
    description: 'Our team ensures your cloud infrastructure is performing at its peak efficiency, whether during setup, migration, or ongoing operations.',
    icon: CloudIcon,
  },
  {
    name: 'Cost Optimization',
    description: 'We reduce costs without compromising on performance, finding the most efficient configurations for your cloud environment.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Security Optimization',
    description: 'Enhance security protocols to ensure that your cloud infrastructure is secure, while maintaining optimal performance and cost efficiency.',
    icon: ShieldCheckIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transform Your Cloud Contracts with an Expert Cloud Negotiator
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We ensure you get the best in cloud optimization, cost management, and security.
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

