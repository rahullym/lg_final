import { Resend } from 'resend';

export const POST: import('astro').APIRoute = async ({ request }) => {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    try {
        const data = await request.json();
        const { fullName, phone, interest, source } = data;

        const { error } = await resend.emails.send({
            from: import.meta.env.FROM_EMAIL || 'onboarding@resend.dev',
            to: import.meta.env.CONTACT_EMAIL || 'enquiry@logisticsgurukul.com',
            subject: `New Lead from Website: ${fullName}`,
            text: `
        New Lead Details:
        Name: ${fullName}
        Phone: ${phone}
        Interest: ${interest}
        Source: ${source || 'Contact Form'}
      `,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">New Lead Notification</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Source:</strong> ${source || 'Contact Form'}</p>
        </div>
      `,
        });

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Error sending email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
