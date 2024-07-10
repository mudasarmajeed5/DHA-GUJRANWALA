import React from 'react'

const CreateAccount = () => {
    return (
        <>
            <div className="flex justify-around md:flex-row flex-col gap-2 items-start p-8">
                {/* Signup Column */}
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="text-green-500 text-lg mb-4">Signup to Get Personalized Experience</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-600 text-sm">Name:</label>
                            <input type="text" id="name" name="name" className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-green-500 text-sm" required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-600 text-sm">Email:</label>
                            <input type="email" id="email" name="email" className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-green-500 text-sm" required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="nic" className="text-gray-600 text-sm">NIC Number:</label>
                            <input type="text" id="nic" name="nic" className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-green-500 text-sm" required />
                        </div>

                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm">Signup</button>
                    </form>
                </div>

                {/* Status Column */}
                <div className="md:w-1/2 w-full p-6 border-t border-t-black md:border-l border-l-black">
                    <h2 className="text-green-500 text-lg mb-4">Track Your Application Status</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="applicationNumber" className="text-gray-600 text-sm">Application Number:</label>
                            <input type="text" id="applicationNumber" name="applicationNumber" className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-green-500 text-sm" required />
                        </div>

                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm">Track Status</button>
                    </form>

                    {/* Placeholder for application status result */}
                    <div className="mt-4 p-4 border border-gray-300 rounded-lg h-20 flex items-center justify-center text-sm">
                        {/* Application status result will be shown here */}
                        <p>Application Status: Write your Application number above</p>
                    </div>
                </div>
            </div>
            <div className="border border-black"></div>
        </>
    )
}

export default CreateAccount