import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import ContactImage from "../../../../public/image/contactImage.png";


const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="mt-7 relative">
        <div className="flex justify-center relative">
          <Image
            src={ContactImage}
            alt="Shop Image"
            className="rounded-lg w-[1440px] h-[316px]"
          />
        </div>
      </div>

      {/* Contact Page */}
      <div>
        {/* Text Content */}
        <div className="flex items-center justify-center py-7 flex-col mt-6">
          <h2 className="font-semibold text-[36px] text-center">
            Get In Touch With Us
          </h2>
          <p className="max-w-screen-md text-center pt-3 text-[#9F9F9F] font-normal px-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        {/* Location and Form Section */}
        <div className="max-w-screen-lg mx-auto p-6 flex flex-col md:flex-row gap-y-10 md:gap-x-12">
          {/* Box 1 - Contact Information */}
          <div className="space-y-10 w-full md:w-1/2">
            {/* Address */}
            <div className="flex space-x-5 items-start">
              <FaLocationDot size={22} className="mt-1 text-gray-800" />
              <div>
                <h4 className="font-medium text-[24px] text-gray-800">
                  Address
                </h4>
                <p className="text-[16px] text-gray-600">
                  236 5th SE Avenue, New <br /> York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex space-x-5 items-start">
              <FaPhoneAlt size={22} className="mt-1 text-gray-800" />
              <div>
                <h4 className="font-medium text-[24px] text-gray-800">Phone</h4>
                <p className="text-[16px] text-gray-600">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-[16px] text-gray-600">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex space-x-5 items-start">
              <IoTime size={22} className=" mt-1 text-gray-800" />
              <div>
                <h4 className="font-medium text-[24px] text-gray-800">
                  Working Hours
                </h4>
                <p className="text-[16px] text-gray-600">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 - Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="p-8 rounded-lg">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-black"
              />

              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-black"
              />

              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is optional"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-black"
              />

              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I’d like to ask about"
                className="w-full mb-6 p-2 border border-gray-300 rounded-md focus:outline-black"
                rows={4}
              ></textarea>
              {/* button */}
              <button
                type="submit"
                className="bg-[#b88e2f] text-white py-2 rounded-md hover:bg-[#b88f2fa6] transition px-8 w-full sm:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <Services /> */}
    </div>
  );
};

export default Contact;
