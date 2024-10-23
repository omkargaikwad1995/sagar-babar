import icon2 from '../../assets/icons/Vector 2043.png'
import axios from 'axios';
const ContactForm = () => {
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Graphy webhook URL (replace with your actual webhook URL)
        const webhookUrl = 'https://sagarbabar.com/kjsoY5iw64HNksjh';

        try {
            const response = await axios.post(webhookUrl, data);

            if (response.status === 200) {
                console.log('Form submitted successfully to Graphy');
                // Clear the form or show a success message
            } else {
                console.error('Form submission to Graphy failed');
                // Show an error message to the user
            }
        } catch (error) {
            console.error('Error submitting form to Graphy:', error);
            // Show an error message to the user
        }
    };

    return (
        <div>
            <section>
                <div className="bg-white py-6 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Left column */}
                            <div className="space-y-6 mb-32">
                                <div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Contact
                                </div>
                                <h2 className="text-4xl font-bold">
                                    Absolutely <span className="text-orange-500">Worth it !</span>
                                </h2>
                                <p className="text-gray-600 text-md">
                                    When you connect with me, you're not just making contact—you're stepping into a world of growth and opportunity. Expect personalized guidance, fast responses, and actionable strategies tailored to your unique challenges. Whether it's business insights or support for your next big step, I’m here to ensure your success. This connection is absolutely worth it!
                                </p>
                            </div>

                            {/* Right column */}
                            <div className="relative">
                                <div className="absolute top-2 right-8 md:right-8 -mr-12 -mt-12 w-16 h-16 transform rotate-45">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="absolute bottom-0 left-6 -ml-10 -mb-4 w-8 h-8 transform rotate-45">
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
