import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type FormData = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
};

const ContactForm = () => {
  console.log('Rendering ContactForm component');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("LlOg_YVYazGERqy6J");
  }, []);

  const onSubmit = async (formData: FormData) => {
    console.log('Form submitted with data:', formData);
    try {
      setIsSubmitting(true);
  
      // Save to Supabase with error details
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message,
          phone: formData.phone || '',
          company: formData.company || ''
        }])
        .select();
  
      if (error) {
        console.error('Supabase error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        });
        throw error;
      }
  
      console.log('Successfully saved to Supabase:', data);
      
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
      
      alert("Thank you! Your message has been sent.");
      reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Error saving your message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // Email validation pattern
  const emailPattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address"
  };
  
  console.log('Email validation pattern:', emailPattern);

  console.log('Form errors:', errors);
  
  return (
    <form 
      onSubmit={(e) => {
        console.log('Form submit event triggered');
        handleSubmit(onSubmit)(e).catch(err => {
          console.error('Form submission error:', err);
        });
      }} 
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name <span className="text-red-600">*</span>
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
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          className={`mt-1 block w-full px-4 py-3 bg-white rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300`}
          {...register("email", { 
            required: "Email is required",
            pattern: emailPattern
          })}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {errors.email.type === 'required' 
              ? 'Email is required' 
              : 'Please enter a valid email address'}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300"
            {...register("phone")}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300"
            {...register("company")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message *
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
        className={`w-full px-8 py-3 rounded-full transition-all duration-200 font-medium ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white text-lg`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
