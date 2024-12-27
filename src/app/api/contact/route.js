import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

// configure email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SENDER_USER,
        pass: process.env.SENDER_PASS,
    },
    logger: true, // Enable Nodemailer logger for debugging
    debug: true,  // This will provide detailed information about the connection
});

export async function POST(request) {
    try {
        const { fullname, email, message } = await request.json();

        // Validation
        if (!fullname || !email || !message) {
            return NextResponse.json(
                { error: "Full Name, Email, and Message are required!" },
                { status: 400 }
            );
        }

        const mailOptions = {
            from: process.env.SENDER_USER,
            to: process.env.RECIEVER_USER,
            subject: "New Contact Form Submission",
            text: `Full Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Contact Form Submitted Successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error.message);
        console.error(error.stack); // Log the stack trace for more detailed debugging
        return NextResponse.json(
            { error: "Failed processing contact form!" },
            { status: 500 }
        );
    }
}