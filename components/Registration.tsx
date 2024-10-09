"use client";
import Image from "next/image";
import { useState } from "react";
import BusSvg from "../Public/assets/BusIcon.svg";

export default function RegistrationForm() {
  const [registerAs, setRegisterAs] = useState("school");

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex space-x-4 text-black">
          <h1 className="text-[#71717A] font-semibold">Register as</h1>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              value="school"
              id="school"
              checked={registerAs === "school"}
              onChange={() => setRegisterAs("school")}
            />
            <label className="text-black" htmlFor="school">
              School
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              value="student"
              id="student"
              checked={registerAs === "student"}
              onChange={() => setRegisterAs("student")}
            />
            <label className="text-black" htmlFor="student">
              Student
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left Side for Image */}
        <div className="w-full md:w-2/5 bg-secondary p-6 rounded-t-lg md:rounded-l-lg md:rounded-t-none shadow-md flex justify-center items-center">
          {registerAs === "school" ? (
            <Image
              src={BusSvg}
              alt="School bus illustration"
              className="w-auto h-auto max-w-full max-h-full" // Updated for responsive sizing
              height={10}
            />
          ) : (
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Student illustration"
              className="w-auto h-auto max-w-full max-h-full" // Updated for responsive sizing
            />
          )}
        </div>

        {/* Right Side for Form */}
        <div className="w-full md:w-3/5 p-6">
          {registerAs === "school" ? (
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-black">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label className="block mb-1 text-black">Address</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block mb-1 text-black">PIN Code</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label className="block mb-1 text-black">State</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block mb-1 text-black">City</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label className="block mb-1 text-black">Phone Number</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block mb-1 text-black">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <button className="bg-secondary text-white hover:bg-amber-500 p-2 rounded">
                REGISTER
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-black">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 text-black">State</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 text-black">City</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 text-black">Select School</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select School</option>
                  <option value="woodland">Woodland Primary School</option>
                  <option value="maple">Maple Leaf School</option>
                  <option value="army">Army Public School</option>
                  <option value="kendriya">Kendriya Vidyalaya</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-black">Select Class</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select Class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                </select>
              </div>
              <button className="bg-secondary text-white hover:bg-amber-500 p-2 rounded">
                REGISTER
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
