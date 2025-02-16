// app/components/ui/NewsletterSignup.tsx
'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { toast } from "sonner";
import { useTheme } from "next-themes"; // Import useTheme

function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState(''); // Add name state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const { theme } = useTheme(); // Use the useTheme hook

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email address.");
            return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            toast.error("Invalid email address.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name }), // Send name
            });


            if (response.ok) {
                toast.success("Thank you for subscribing!");
                setShowForm(false);
                setEmail('');
                setName(''); // Clear name

                setTimeout(() => {
                    setShowForm(true);
                }, 5000);
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || "An error occurred.  Please try again.");
            }


        } catch (error: unknown) {
            console.error("Subscription error:", error);
            
            if (error instanceof Error) {
                toast.error(error.message || "An error occurred. Please try again.");
            } else {
                toast.error("An error occurred. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className={`py-16 px-4 md:px-8 lg:px-16 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Subscribe to My Newsletter</h2>
                <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}`}>
                    Stay updated with the latest blogs and articles on product management, technology, healthcare, and more, delivered directly to your inbox.
                </p>

                {showForm ? (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Optional Name Input */}
                        <Input
                            type="text"
                            placeholder="Enter your name (optional)"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full sm:w-96 text-lg mb-4 sm:mb-0 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white'}`}
                            disabled={isSubmitting}
                        />

                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full sm:w-96 text-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white'}`}
                            required
                            disabled={isSubmitting}
                        />
                        <Button type="submit" disabled={isSubmitting} size="lg" variant={theme === 'dark' ? 'secondary' : 'default'}>
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </Button>
                    </form>
                ) : (
                    <p className={`text-lg ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Thank you for subscribing!</p>
                )}
            </div>
        </div>
    );
}

export default NewsletterSignup;

