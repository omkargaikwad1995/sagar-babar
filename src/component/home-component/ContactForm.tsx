import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import icon2 from '../../assets/icons/Vector 2043.png';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First name is required')
            .min(2, 'First name must be at least 2 characters')
            .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed'),
        lastName: Yup.string()
            .required('Last name is required')
            .min(2, 'Last name must be at least 2 characters')
            .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email format'),
        mobile: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters')
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            message: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsSubmitting(true);
            try {
                // Prepare data for Graphy webhook
                const graphyData = {
                    name: `${values.firstName} ${values.lastName}`,
                    email: values.email,
                    phone: values.mobile,
                    query: values.message
                };

                // Submit to Graphy webhook
                const response = await fetch('https://sagarbabar.graphy.com/api/webhook/9766075603', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(graphyData)
                });

                if (response.ok) {
                    toast.success('Form submitted successfully!');
                    resetForm();
                } else {
                    throw new Error('Failed to submit form');
                }
            } catch (error) {
                console.error('Submission error:', error);
                toast.error('Failed to submit form. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        }
    });

    return (
        <div>
            <section>
                <div className="bg-white py-6 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
                            {/* Left column */}
                            <div className="space-y-6 mb-2 md:mb-32">
                                <div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Contact
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold">
                                    Absolutely <span className="text-orange-500">Worth it !</span>
                                </h2>
                                <p className="text-gray-600 text-md">
                                    When you connect with me, you're not just making contact—you're stepping into a world of growth and opportunity. Expect personalized guidance, fast responses, and actionable strategies tailored to your unique challenges. Whether it's business insights or support for your next big step, I'm here to ensure your success. This connection is absolutely worth it!
                                </p>
                            </div>

                            {/* Right column */}
                            <div className="relative md:flex md:justify-center">
                                <div className="absolute top-2 right-8 md:right-8 -mr-12 -mt-12 w-16 h-16 transform rotate-45">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="absolute bottom-0 left-6 -ml-10 -mb-4 w-8 h-8 transform rotate-45">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-8 relative z-10 w-full md:w-[80%] lg:w-[70%] xl:w-[60%]">
                                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                {...formik.getFieldProps('firstName')}
                                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                                                    ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {formik.touched.firstName && formik.errors.firstName && (
                                                <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                                            )}
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                {...formik.getFieldProps('lastName')}
                                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                                                    ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {formik.touched.lastName && formik.errors.lastName && (
                                                <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                                            )}
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Enter email"
                                                {...formik.getFieldProps('email')}
                                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                                                    ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {formik.touched.email && formik.errors.email && (
                                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                            )}
                                        </div>

                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Mobile Number"
                                                {...formik.getFieldProps('mobile')}
                                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                                                    ${formik.touched.mobile && formik.errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {formik.touched.mobile && formik.errors.mobile && (
                                                <div className="text-red-500 text-sm mt-1">{formik.errors.mobile}</div>
                                            )}
                                        </div>

                                        <div>
                                            <textarea
                                                placeholder="Describe..."
                                                {...formik.getFieldProps('message')}
                                                rows={4}
                                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                                                    ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                            ></textarea>
                                            {formik.touched.message && formik.errors.message && (
                                                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 
                                                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;