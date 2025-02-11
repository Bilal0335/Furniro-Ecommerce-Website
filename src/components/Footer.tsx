export default function Footer() {
    return (
      <footer className="bg-white p-5 border-t-2 border-gray-300">
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 leading-10">
          {/* Company Info */}
          <div className="w-full md:w-[14rem] mb-5 md:mb-0">
            <h2 className="font-bold text-[2rem]">Funiro.</h2>
            <p className=" text-[#9F9F9F] mt-6 leading-6">
              400 University Drive Suite 200 Coral
              <br /> Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
  
          {/* Navbar Links */}
          <div className="mb-5 md:mb-0">
            <h4 className="font-medium text-lg text-[#9F9F9F]">Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
  
          {/* Help Links */}
          <div className="mb-5 md:mb-0">
            <h4 className="font-medium text-lg text-[#9F9F9F]">Help</h4>
            <ul>
              <li>
                <a href="#">Payment Option</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div className="mb-5 md:mb-0">
            <h4 className="font-medium text-lg text-[#9F9F9F]">Newsletter</h4>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b p-2"
              />
              <button
                type="submit"
                className="font-bold p-2  text-black border-b"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-5 text-left">
          <hr />
          <p className="text-sm text-gray-500 mt-2">
            2023 Furino. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  