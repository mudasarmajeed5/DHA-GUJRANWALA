import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-300">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="https://dhagwa.vercel.app/" className="flex justify-center  flex-col md:flex-row items-start">
            <img
              src="https://i.ibb.co/RQ2Lj7c/dhalogo.png"
              className="w-[200px] h-auto me-3"
              alt="FlowBite Logo"
            />
            
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Resources
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Ongoing Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Follow us
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex md:mx-4 mt-4 md:justify-start justify-center">
          <a
            href="#"
            className="bg-gray-700 hover:bg-black p-1 text-white"
          >
          <FaInstagram/>  
          </a>
          <a
            href="#"
            className="bg-gray-700 hover:bg-black p-1 text-white ms-5"
          >
          <FaTwitter/>   
          </a>
          <a
            href="#"
            className="bg-gray-700 hover:bg-black p-1 text-white ms-5"
            >
          <FaYoutube/>  
          </a>
          <a
            href="#"
            className="bg-gray-700 hover:bg-black p-1 text-white ms-5"
            >
          <FaLinkedin/>  
          </a>
        </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            DHA GUJRANWALA™
          </a>
          . All Rights Reserved.
        </span>

      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer