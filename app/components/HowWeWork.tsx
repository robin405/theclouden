import { CheckCircleIcon } from '@heroicons/react/24/solid'

const steps = [
  { name: 'Initial Discovery and Cloud Audit', description: 'We begin with a comprehensive audit of your cloud usage and costs, identifying inefficiencies using AI-powered analysis.' },
  { name: 'Customized Savings Strategy', description: 'We craft a tailored savings plan based on the audit findings, ensuring your cloud setup is optimized for both cost and performance.' },
  { name: 'Contract Negotiation and Cost Reduction', description: 'We negotiate with cloud providers on your behalf, securing lower rates, flexible terms, and bonus benefits like better SLAs.' },
  { name: 'Implementation and Performance Optimization', description: 'We implement the optimized cloud strategies and track performance in real time using AI-driven monitoring tools.' },
  { name: 'Ongoing Monitoring and Reporting', description: 'We continue to monitor cloud usage and provide monthly reports detailing cost savings and optimization opportunities.' },
  { name: 'Regular Reviews and Future Planning', description: 'Every quarter, we review your cloud\'s performance and adjust strategies to ensure long-term success.' },
]

export default function HowWeWork() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How We Work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our process is designed to streamline cloud optimization and ensure maximum savings from day one.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => (
              <div key={step.name} className="relative">
                <dt>
                  <CheckCircleIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">Step {index + 1}: {step.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

