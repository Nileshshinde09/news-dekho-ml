import React from 'react'

const apiprovider = () => {
  return (
    <div>
<div className=" bg-gray-100 flex items-center justify-center ">
  <div className="bg-white max-sm:mt-14 sm:mt-5 p-8 shadow-lg shadow-cyan-950 rounded-lg max-w-md w-full">
    <h1 className="text-3xl font-semibold mb-6">API Information</h1>
    <div className="mb-6">
      <p className="text-gray-600 mb-2 font-semibold">API Endpoint:</p>
      <code className="bg-gray-100 p-4 rounded-md inline-block break-all text-sm">
        apiEndpoint
      </code>
    </div>
    <div>
      <p className="text-gray-600 mb-2 font-semibold">Requests Per Day Limit:</p>
      <p className="text-2xl font-semibold text-blue-600">requestsPerDayLimit</p>
    </div>
    <div className="mt-8">
      <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
        Fetch Data
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default apiprovider
