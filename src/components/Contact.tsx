import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("LlOg_YVYazGERqy6J");
  }, []);

  const onSubmit = async (formData: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Send email via Email.js
      const emailResponse = await emailjs.send(
        'service_it9yaya',
        'template_o8zc7sj',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sayge Team'
        }
      );

      // TODO: Google Sheets integration to be implemented later
      /* 
      // Send data to Google Sheets
      const sheetsUrl = new URL("https://script.google.com/macros/s/AKfycbzeW6tV5hqkUtGbJQbWPgClG6aAWs6wmkgv62ajesXM2cIogEZdWWVSDk4h2cHDvfEe/exec");
      
      // Add form data as URL parameters
      sheetsUrl.searchParams.append('name', formData.name);
      sheetsUrl.searchParams.append('email', formData.email);
      sheetsUrl.searchParams.append('message', formData.message);

      // Send as GET request
      await fetch(sheetsUrl.toString(), {
        method: 'GET',
        mode: 'no-cors'
      });
      */

      if (emailResponse.status === 200) {
        alert("Thank you! Your message has been sent.");
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Let's Work Together</h2>
          <p className="mt-4 text-xl text-gray-600">
            Ready to transform your ideas into reality? Get in touch with us.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`mt-1 block w-full px-4 py-3 bg-white rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300`}
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`mt-1 block w-full px-4 py-3 bg-white rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300`}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`mt-1 block w-full px-4 py-3 bg-white rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300 resize-y min-h-[120px]`}
                  {...register("message", { required: "Message is required" })}
                  placeholder="Tell us about your project or requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3.5 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md active:transform active:scale-[0.98] ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;