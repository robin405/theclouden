import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Thank You!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've received your submission and will be in touch soon.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

