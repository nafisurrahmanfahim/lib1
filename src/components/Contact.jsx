import React from 'react'
import bg from '../assets/bg.jpeg'

const Contact = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat flex items-center"
            style={{
                backgroundImage: `url(${bg})`
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <section className="relative z-10 w-full py-24">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between px-6">

                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-[6px] text-white">
                            GET CONNECTED WITH US
                        </h2>

                        <p className="text-[#f3c7aa] mt-4 text-lg">
                            Subscribe to our monthly newsletter
                        </p>

                        <div className="mt-8 flex border border-[#c89a7a] w-[380px] bg-white/90 backdrop-blur-sm">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-3 outline-none bg-transparent text-gray-800"
                            />
                            <button className="px-6 py-3 bg-white border-l border-[#c89a7a] hover:bg-[#f0e8e4] duration-200">
                                SEND
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
