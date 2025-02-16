// app/api/contact/route.ts
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        // Validate data (important for security and data integrity)
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }
        if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string'){
            return NextResponse.json({ error: 'Invalid data types' }, { status: 400 });
        }

        // Insert into Supabase
        const { error: supabaseError } = await supabaseAdmin
            .from('contacts')
            .insert([{ name, email, message }]);

        if (supabaseError) {
            console.error("Supabase Error:", supabaseError);
            return NextResponse.json({ error: 'Failed to save to database' }, { status: 500 });
        }

        // Send email via Resend
        try {
            const data = await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL!,  // Use the ! operator to assert non-null
                to: process.env.RESEND_TO_EMAIL!,   // Use the ! operator
                subject: 'New Contact Form Submission',
                html: `
                    <p>You have a new contact form submission on your portfolio website:</p>
                    <ul>
                        <li><strong>Name:</strong> ${name}</li>
                        <li><strong>Email:</strong> ${email}</li>
                        <li><strong>Message:</strong> ${message}</li>
                    </ul>
                `,
            });

            console.log("Resend Email Response:", data); //log full email response for debugging


        } catch (resendError) {
            console.error("Resend Error:", resendError);
             return NextResponse.json({ error: 'Failed to send email but the message was saved to database' }, { status: 500 });

        }

        return NextResponse.json({ message: 'Message sent and saved successfully!' }, { status: 200 });

    } catch (error) {
        console.error("Unexpected Error:", error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}

