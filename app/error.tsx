'use client'
import { useRouter } from 'next/navigation';

export default function ErrorBoundary({error}: {error: Error}) {
  const router = useRouter();

  const goHome = () => {
    router.push('/'); // Redirects to the home page
  };

  return (
    <div
      className='p-5 min-h-screen bg-cover bg-center bg-fixed'
      style={{
        backgroundImage: "url('/error.jpg')", // Ensure the correct path to your image
      }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 text-center max-w-lg mx-auto shadow-lg rounded-lg">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Sorry, we got lost
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            It seems we can&apos;t find the page you&apos;re looking for. Please go back to the home page.
          </p>
          <p className="text-md text-red-600 mb-6">
            Error: {error.message}
          </p>
          <button
            onClick={goHome}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
