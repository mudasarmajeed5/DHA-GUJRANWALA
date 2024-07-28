
import { FaChartPie } from "react-icons/fa";
export default function Component() {
  return (
    <div className="text-[--secondary-button] mortgagecalculator rounded-lg p-8 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="font-bold">
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="text-muted-foreground">
            Breakdown of your monthly payments
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="flex items-center gap-2 bg-[--secondary-button] hover:opacity-90 text-[--text-color] rounded-md px-4 py-2 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Report
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" text-white rounded-lg p-6">
          <div className="aspect-square w-full">
            <FaChartPie className="w-full text-[--secondary-button] h-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#130303] text-white rounded-lg p-2 flex flex-col items-center justify-center">
            <span className="text-sm font-medium">Principal Interest</span>
            <span className="text-lg font-bold">Rs.40000</span>
          </div>
          <div className="bg-[#130303] text-white rounded-lg p-2 flex flex-col items-center justify-center">
            <span className="text-sm font-medium">Installments</span>
            <span className="text-lg font-bold">Rs.70000</span>
          </div>
          <div className="bg-[#130303] text-white rounded-lg p-2 flex flex-col items-center justify-center">
            <span className="text-sm font-medium">Homeowner Insurance</span>
            <span className="text-lg font-bold">Rs.200000</span>
          </div>
          <div className="bg-[#130303] text-white rounded-lg p-2 flex flex-col items-center justify-center">
            <span className="text-sm font-medium">Total</span>
            <span className="text-lg font-bold">Rs.150000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

