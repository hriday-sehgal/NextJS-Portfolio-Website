// components/ui/ContactForm.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const { theme } = useTheme();

  const onSubmit = async (data: unknown) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setShowForm(false);
        reset();
        setTimeout(() => {
          setShowForm(true);
        }, 5000);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Contact Form Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Let's Connect
        </h2>
        <p className="text-gray-600">
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you!
        </p>
      </motion.div>

      {showForm ? (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                  className="pl-10 bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  disabled={isSubmitting}
                />
              </div>
              {errors.name?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="your.email@example.com"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="pl-10 bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  disabled={isSubmitting}
                />
              </div>
              {errors.email?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
              <Textarea
                placeholder="Your message..."
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="pl-10 bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                disabled={isSubmitting}
              />
            </div>
            {errors.message?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message as string}
              </p>
            )}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pt-2"
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <FiSend className="mr-2" />
                  Send Message
                </span>
              )}
            </Button>
          </motion.div>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Message Sent!
          </h3>
          <p className="text-gray-600">
            Thank you for reaching out. I'll get back to you as soon as
            possible.
          </p>
        </motion.div>
      )}

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <a
              href="https://linkedin.com/in/hridaysehgal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hover:bg-purple-50 hover:text-purple-600 transition-colors"
          >
            <a
              href="https://github.com/hriday-sehgal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hover:bg-green-50 hover:text-green-600 transition-colors"
          >
            <a href="mailto:hriday.career@gmail.com" rel="noopener noreferrer">
              <FiMail className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <a href="tel:9818045065">
              <FiPhone className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
