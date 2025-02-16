// app/api/subscribe/route.ts
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { NextRequest, NextResponse } from 'next/server';
import { sendSubscriberConfirmationEmail, sendAdminNotificationEmail } from '@/lib/email'; // Import our email functions


export async function POST(req: NextRequest) {
    try {
        const { email, name } = await req.json();

        if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        // Insert into Supabase
        const { error: supabaseError } = await supabaseAdmin
            .from('subscribers')
            .insert([{ email, name }]);

        if (supabaseError) {
            console.error("Supabase Error:", supabaseError);
            //  More specific error message:
            return NextResponse.json({ error: `Failed to save to database: ${supabaseError.message}` }, { status: 500 });
        }

        // Send notification email to *you* (using our helper function)
        try {
            await sendAdminNotificationEmail({email, name});
        } catch (adminEmailError) {
            console.error("Admin notification email failed:", adminEmailError);
            // Log and continue, don't fail the subscription
        }

        // Send *confirmation* email to the *subscriber* (using our helper function)
        try {
            await sendSubscriberConfirmationEmail({ email, name });
        } catch (confirmationEmailError) {
            console.error("Subscriber confirmation email failed:", confirmationEmailError);
             return NextResponse.json({
                error: "Failed to send confirmation email, but subscription was successful.",
            }, { status: 500 });
        }

        return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });

    } catch (error) {
        console.error("Subscription API Error:", error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}
