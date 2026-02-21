import { Resend } from 'resend';

export const POST: import('astro').APIRoute = async ({ request }) => {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    try {
        const data = await request.json();
        const { name, phone, email, qualification, currentStatus, interest, preferredTime } = data;

        const { error } = await resend.emails.send({
            from: import.meta.env.FROM_EMAIL || 'onboarding@resend.dev',
            to: import.meta.env.CONTACT_EMAIL || 'enquiry@logisticsgurukul.com',
            subject: `New Counseling Request: ${name}`,
            text: `
        New Counseling Request Details:
        Name: ${name}
        Phone: ${phone}
        Email: ${email || 'Not provided'}
        Qualification: ${qualification}
        Current Status: ${currentStatus}
        Interest: ${interest}
        Preferred Call Time: ${preferredTime}
      `,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">New Counseling Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>Qualification:</strong> ${qualification}</p>
          <p><strong>Current Status:</strong> ${currentStatus}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Preferred Call Time:</strong> ${preferredTime}</p>
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
