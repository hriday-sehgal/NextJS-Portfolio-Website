// lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendConfirmationEmailProps {
    email: string;
    name?: string; // Name is optional
}

export async function sendSubscriberConfirmationEmail({ email, name }: SendConfirmationEmailProps) {
    try {
        const data = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,  // Your "from" email address
            to: email,        // The subscriber's email
            subject: 'Thank you for subscribing to my newsletter!',
            html: `
                <p>Hi ${name ? name : 'there'}!</p>
                <p>Thank you for subscribing to my newsletter.  You'll receive updates on my latest blogs and articles.</p>
                <p>For any queries, please contact me at <a href="mailto:hriday.career@gmail.com">hriday.career@gmail.com</a>.</p>
            `,
        });

        if (data?.error) {  //check for error
            throw new Error(`Resend error: ${data.error.message}`);
        }

    } catch (error) {
        console.error('Error sending confirmation email:', error);
        throw error; // Re-throw the error so the API route can handle it
    }
}

interface sendAdminNotificationEmailProps {
    email: string;
    name?: string
}

export async function sendAdminNotificationEmail({email, name}: sendAdminNotificationEmailProps) {
    try {
        const data = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: process.env.RESEND_TO_EMAIL!,  // Your email address
            subject: 'New Newsletter Subscriber',
            html: `<p>You have a new Newsletter Subscriber at your portfolio website.</p><p> His email is: ${email} and his name is: ${name ? `(${name})` : ''}</p></p>`,
        });
        if(data?.error){ //check for error
             throw new Error(`Resend error: ${data.error.message}`);
        }
    } catch (error) {
        console.error('Error sending admin notification email:', error);
        throw error; // Re-throw for consistent error handling
    }
}

