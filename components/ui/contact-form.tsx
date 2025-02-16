// components/ui/ContactForm.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const { theme } = useTheme();

  const onSubmit = async (data: unknown) => {
      setIsSubmitting(true);
      try {
          const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });

          if (response.ok) {
              toast.success('Message sent successfully!');
              setShowForm(false);
              reset();
              setTimeout(() => {
                  setShowForm(true);
              }, 5000);
          } else {
              const errorData = await response.json(); // Get error message from API
              toast.error(errorData.error || 'Failed to send message.');  // Use the error message from the API
          }

      } catch (error) {
          toast.error('Failed to send message. Please try again.');
          console.error("Contact Form Submission Error:", error);
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
        <div className="max-w-2xl mx-auto pb-0"> {/* Added pb-8 here */}
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
          {showForm ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  {...register('name', { required: "Name is required" })}
                  className={`bg-background ${theme === 'dark' ? 'text-white' : ''}`}
                  disabled={isSubmitting}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  {...register('email', {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`bg-background ${theme === 'dark' ? 'text-white' : ''}`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.name?.message && typeof errors.name.message === 'string' && (
  <p className="text-red-500">{errors.name.message}</p>
)}

{errors.email?.message && typeof errors.email.message === 'string' && (
  <p className="text-red-500">{errors.email.message}</p>
)}
              <Textarea
                placeholder="Message"
                rows={5}
                {...register('message', { required: "Message is required" })}
                className={`bg-background ${theme === 'dark' ? 'text-white' : ''}`}
                disabled={isSubmitting}
              />
             {errors.message?.message && typeof errors.message.message === 'string' && (
  <p className="text-red-500">{errors.message.message}</p>
)}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </motion.form>
          ) : (
            <p className={`text-center text-lg ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>
              Thank you for sending a message! I will get back to you soon.
            </p>
          )}
          <div className="mt-8 text-center space-y-4">
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/hridaysehgal" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/hriday-sehgal" target="_blank" rel="noopener noreferrer">
                  <FiGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:hriday.career@gmail.com" rel="noopener noreferrer">
                  <FiMail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="tel:9818045065">
                  <FiPhone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      );
}