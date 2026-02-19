import nodemailer from 'nodemailer';

export const POST: import('astro').APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { fullName, phone, interest, source } = data;

        // Create a transporter using SMTP or other transport mechanism
        // For production, use environment variables for credentials
        const transporter = nodemailer.createTransport({
            host: import.meta.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(import.meta.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: import.meta.env.SMTP_USER,
                pass: import.meta.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Logistics Gurukul Website" <${import.meta.env.SMTP_USER}>`,
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
        };

        await transporter.sendMail(mailOptions);

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
