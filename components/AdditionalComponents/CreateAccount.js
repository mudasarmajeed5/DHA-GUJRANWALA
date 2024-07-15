import React from 'react'

const CreateAccount = () => {
    return (
        <>
            <div className="flex justify-around md:flex-row flex-col gap-2 items-start p-8">
                {/* Signup Column */}
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="text-[--secondary-button] lg:text-3xl text-2xl font-bold mb-4 md:text-left text-center uppercase">Signup to Get Personalized Experience</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[--secondary-button] lg:text-xl text-md">Name:</label>
                            <input type="text" id="name" name="name" className="border bg-[--bg-color] text-[--text-color] px-3 py-2 rounded-lg focus:border-[--secondary-button] text-sm" required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-[--secondary-button] lg:text-xl text-md">Email:</label>
                            <input type="email" id="email" name="email" className="border bg-[--bg-color] text-[--text-color] px-3 py-2 rounded-lg focus:border-[--secondary-button] text-sm" required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="nic" className="text-[--secondary-button] lg:text-xl text-md">NIC Number:</label>
                            <input type="text" id="nic" name="nic" className="border bg-[--bg-color] text-[--text-color] px-3 py-2 rounded-lg focus:border-[--secondary-button] text-sm" required />
                        </div>

                        <div className="text-center md:text-left"><button type="submit" className="bg-[--secondary-button] text-white py-2 px-4 rounded-full 2xl:text-2xl text-md">Signup</button></div>
                    </form>
                </div>

                {/* Status Column */}
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="text-[--secondary-button] md:text-left text-center font-bold lg:text-3xl text-2xl mb-4 uppercase">Tracking ID</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="applicationNumber" className="text-[--secondary-button] lg:text-xl text-md">Application Number:</label>
                            <input type="text" id="applicationNumber" name="applicationNumber" className="border bg-[--bg-color] text-[--text-color] px-3 py-2 rounded-lg focus:border-[--secondary-button] text-sm" required />
                        </div>

                        <div className="text-center md:text-left"><button type="submit" className="bg-[--secondary-button] text-white py-2 px-4 rounded-full 2xl:text-2xl text-md">Track Status</button></div>
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