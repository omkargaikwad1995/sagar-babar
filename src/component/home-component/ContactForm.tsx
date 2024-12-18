import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import icon2 from '../../assets/icons/Vector 2043.png';
import { toast } from 'react-hot-toast';
import { useTranslation, UseTranslationOptions } from 'react-i18next';

// Access environment variables correctly in React
const SMTP2GO_CONFIG = {
    API_KEY: import.meta.env.VITE_SMTP2GO_API_KEY,
    FROM_EMAIL: import.meta.env.VITE_FROM_EMAIL,
    TO_EMAIL: import.meta.env.VITE_TO_EMAIL
};

// Define the service
const SMTP2GO_SERVICE = {
    endpoint: 'https://api.smtp2go.com/v3/email/send',
    async sendEmail(data: {
        firstName: string;
        lastName: string;
        email: string;
        mobile: string;
        message: string;
    }) {
        if (!SMTP2GO_CONFIG.API_KEY || !SMTP2GO_CONFIG.FROM_EMAIL || !SMTP2GO_CONFIG.TO_EMAIL) {
            throw new Error('SMTP2GO configuration is missing. Please check your environment variables.');
        }

        const htmlBody = `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Mobile:</strong> ${data.mobile}</p>
                <p><strong>Message:</strong></p>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    ${data.message}
                </div>
            </div>
        `;

        const payload = {
            api_key: SMTP2GO_CONFIG.API_KEY,
            to: [`${SMTP2GO_CONFIG.TO_EMAIL}`],
            sender: SMTP2GO_CONFIG.FROM_EMAIL,
            subject: `New Contact Form Message from ${data.firstName} ${data.lastName}`,
            html_body: htmlBody,
            text_body: `
                New Contact Form Submission
                Name: ${data.firstName} ${data.lastName}
                Email: ${data.email}
                Mobile: ${data.mobile}
                Message: ${data.message}
            `,
            custom_headers: [
                {
                    header: "Reply-To",
                    value: data.email
                }
            ]
        };

        try {
            console.log('Sending email with payload:', payload); // For debugging

            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            console.log('SMTP2GO Response:', result); // For debugging

            if (!response.ok) {
                throw new Error(result.message || 'Failed to send message');
            }

            if (result.data && result.data.error) {
                throw new Error(result.data.error);
            }

            return result;
        } catch (error) {
            console.error('SMTP2GO Error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to send message');
        }
    }
};

const SuccessDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        // Overlay
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            {/* Dialog */}
            <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4 relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                {/* Content */}
                <div className="text-center">
                    {/* Success icon - a simple checkmark */}
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-500 text-2xl">✓</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2">
                        Thank you for contacting us!
                    </h3>

                    {/* Message */}
                    <p className="text-gray-600">
                        We will reach out to you shortly.
                    </p>

                    {/* Confirm button */}
                    <button
                        onClick={onClose}
                        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const { t } = useTranslation();

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
                await SMTP2GO_SERVICE.sendEmail(values);
                toast.success('Thank you for contacting us! We will get back to you soon.');
                resetForm();
                setShowSuccessDialog(true);
            } catch (error) {
                console.error('Submission error:', error);
                toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        }
    });
    const handleCloseDialog = () => {
        setShowSuccessDialog(false);
    };

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
                                    {t('absolutly1')} <span className="text-orange-500">{t('worth')}</span>
                                </h2>
                                <p className="text-gray-600 text-md">
                                    {t('contactDesc')}
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
                                            />
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
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={handleCloseDialog}
            />
        </div>
    );
};

export default ContactForm;