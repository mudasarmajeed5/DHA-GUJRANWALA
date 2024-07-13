import React from 'react'

const CreateAccount = () => {
    return (
        <>
            <div className="flex justify-around md:flex-row flex-col gap-2 items-start p-8">
                {/* Signup Column */}
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="text-[--secondary-button] text-2xl font-bold mb-4">Signup to Get Personalized Experience</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[--rich-black] text-sm">Name:</label>
                            <input type="text" id="name" name="name" className="border bg-[--bg-color] text-[--text-color] px-3 py-2 rounded-lg focus:outline-none focus:border-[--secondary-button] text-sm" required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-[--rich-black] text-sm">Email:</label>
                            <input type="email" id="email" name="email" className="border bg-[--bg-color] text-[--text-color] px-3 py-2 rounded-lg focus:outline-none focus:border-[--secondary-button] text-sm" required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="nic" className="text-[--rich-black] text-sm">NIC Number:</label>
                            <input type="text" id="nic" name="nic" className="border bg-[--bg-color] text-[--text-color] px-3 py-2 rounded-lg focus:outline-none focus:border-[--secondary-button] text-sm" required />
                        </div>

                        <button type="submit" className="bg-[--secondary-button] text-white py-2 px-4 rounded-full text-sm">Signup</button>
                    </form>
                </div>

                {/* Status Column */}
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="text-[--secondary-button] font-bold text-2xl mb-4">Tracking ID</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="applicationNumber" className="text-[--rich-black] text-sm">Application Number:</label>
                            <input type="text" id="applicationNumber" name="applicationNumber" className="border bg-[--bg-color] text-[--text-color] px-3 py-2 rounded-lg focus:outline-none focus:border-[--secondary-button] text-sm" required />
                        </div>

                        <button type="submit" className="bg-[--secondary-button] text-white py-2 px-4 rounded-full text-sm">Track Status</button>
                    </form>

                    {/* Placeholder for application status result */}
                    <div className="mt-4 p-4 border bg-[--bg-color] text-[--text-color] rounded-lg h-20 flex items-center justify-center text-sm">
                        {/* Application status result will be shown here */}
                        <p>Application Status: Write your Application number above</p>
                    </div>
                </div>
            </div>
            
      <div className="bg-gray-700 border mt-10 mb-5"></div>
        </>
    )
}

export default CreateAccount