import icon2 from '../../assets/icons/Vector 2043.png'

const ContactForm = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    return (
        <div>
            <section>
                <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Left column */}
                            <div className="space-y-6">
                                <div className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Contact
                                </div>
                                <h2 className="text-4xl font-bold">
                                    Absolutely <span className="text-orange-500">Worth it !</span>
                                </h2>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident.
                                </p>
                            </div>

                            {/* Right column */}
                            <div className="relative">
                                <div className="absolute top-0 right-0 -mr-14 -mt-4 w-16 h-16 transform rotate-45">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="absolute bottom-16 left-0 -ml-10 -mb-4 w-8 h-8 transform rotate-45">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-8 relative z-10">
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Enter email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Mobile Number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <textarea
                                            placeholder="Describe..."
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactForm
