import React from 'react'
import Component from './PieChart'
const InterestCaculator = () => {
    return (
        <>
         <div className='my-14 border'></div>
        <div className="text-center w-4/5 mx-auto font-bold 2xl:text-5xl text-3xl 2xl:py-10 py-4 text-[--secondary-button] uppercase">Make your calculations with ease</div>
            <div className="flex flex-col justify-between lg:flex-row items-center">
                <div className="bg-[--bg-color] w-full md:w-1/2 p-6 rounded-lg lg:mr-6 lg:mb-0 mb-6">
                    <h2 className="2xl:text-4xl text-3xl text-center md:text-left font-bold text-[--secondary-button] mb-4">Property Calculator</h2>
                    <div className="grid grid-cols-2 w-full gap-4 mb-4 text-[--text-color]">
                        <div>
                            <label
                                htmlFor="property-type"
                                className="block 2xl:text-xl text-md 2xl:font-bold"
                            >
                                Property Type
                            </label>
                            <select
                                id="property-type"
                                className="mt-1 block w-full p-2 border border-zinc-300 bg-[--bg-color] rounded-md"
                            >
                                <option>Villa</option>
                                <option>Plot</option>
                                <option>Executive Blocks</option>
                                <option>Commercial Zone</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="property-value" className="block 2xl:text-xl text-md 2xl:font-bold ">
                                Property Price
                            </label>
                            <input
                                type="text"
                                id="property-value"
                                className="mt-1 block w-full p-2 border border-zinc-300 bg-[--bg-color] rounded-md"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="down-payment"
                                className="block 2xl:text-xl text-md 2xl:font-bold "
                            >
                                Down Payment
                            </label>
                            <input
                                type="text"
                                id="down-fdsa"
                                className="mt-1 block w-full p-2 border border-zinc-300 bg-[--bg-color] rounded-md"
                                defaultValue="Rs. 50,000"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="down-charges"
                                className="block 2xl:text-xl text-md 2xl:font-bold "
                            >
                                Poccession Charges
                            </label>
                            <input
                                type="text"
                                id="down-dc"
                                className="mt-1 block w-full p-2 border border-zinc-300 bg-[--bg-color] rounded-md"
                                defaultValue="Rs. 50,000"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="down-charges"
                                className="block 2xl:text-xl text-md 2xl:font-bold "
                            >
                                DC Charges
                            </label>
                            <input
                                type="text"
                                id="down-transfer"
                                className="mt-1 block w-full p-2 border border-zinc-300 bg-[--bg-color] rounded-md"
                                defaultValue="Rs. 50,000"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="down-payment"
                                className="block 2xl:text-xl text-md 2xl:font-bold "
                            >
                                Transfer Charges
                            </label>
                            <input
                                type="text"
                                id="down-value"
                                className="mt-1 block w-full p-2 border border-zinc-300 bg-[--bg-color] rounded-md"
                                defaultValue="Rs. 50,000"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-[--text-color] mb-4">
                        <div>
                            <label
                                htmlFor="interest-rate"
                                className="block 2xl:text-xl text-md 2xl:font-bold "
                            >
                                Interest Rate*
                            </label>
                            <input
                                type="range"
                                id="interest-rate"
                                className="mt-1 range-slider block w-full"
                                min={0}
                                max={10}
                                step="0.01"
                                defaultValue="4.25"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="loan-time"
                                className="block 2xl:text-xl text-md 2xl:font-bold "
                            >
                                Loan Time*
                            </label>
                            <input
                                type="range"
                                id="loan-time"
                                className="mt-1 range-slider block w-full"
                                min={1}
                                max={30}
                                step={1}
                                defaultValue={12}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between text-[--text-color] items-center mb-4">
                        <span className="text-lg ">4.25%</span>
                        <span className="text-lg ">12 years</span>
                    </div>
                    <button className="bg-[--download-app-green] text-[var(--text-color)] p-2 rounded-full text-2xl 2xl:text-3xl w-full">
                        Next
                    </button>
                </div>
                <div className="p-6 px-12 rounded-lg text-center min-w-fit mx-auto">
                    
                    <Component/>
                    {/* <h3 className="2xl:text-5xl text-3xl font-bold text-[--secondary-button] mb-4">
                        Monthly Payment
                    </h3>
                    <p className="text-3xl font-bold text-[--secondary-button] mb-2">Rs. 1,8000</p>
                    <p className="text-sm text-[--secondary-button]">Principal and Interest</p>
                    <p className="text-lg font-bold text-[--secondary-button] mb-2">Rs. 1,500</p>
                    <p className="text-sm text-[--secondary-button]">Property Taxes</p>
                    <p className="text-lg font-bold text-[--secondary-button] mb-2">Rs. 2200</p>
                    <p className="text-sm text-[--secondary-button]">Homeowners Insurance</p>
                    <p className="text-lg font-bold text-[--secondary-button]">Rs. 71</p> */}
                </div> 
            </div>
            
            <div className='my-14 border'></div>
        </>
    )
}

export default InterestCaculator