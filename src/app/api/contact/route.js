import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

// configure email
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.NEXT_PUBLIC_SENDER_USER,
        pass:process.env.NEXT_PUBLIC_SENDER_PASS,
    }
});

export async function POST(request){
    try {
        const {fullname, email, message} = await request.json();

        //validation
        if(!fullname || !email || !message){
            return NextResponse.json(
                {error: "Full Name; Email and Message are required!"},
                {status: 400},
            )
        }

        const mailOption = {
            from:process.env.NEXT_PUBLIC_SENDER_USER,
            to:process.env.NEXT_PUBLIC_RECIEVER_USER,
            subject:"New Contact From Submission",
            text:`
                fullname:${fullname}
                email:${email}
                message:${message}
            `,
        };

        await transporter.sendMail(mailOption);

        return NextResponse.json(
            {message: "Contact Form Submited Successfully!"},
            {status: 200},
        )
    } catch (error) {
        console.error("Error processing contact form:",error);
        return NextResponse.json(
            {error: "Failed processing contact form!"},
            {status: 500},
        )
        
    }
}