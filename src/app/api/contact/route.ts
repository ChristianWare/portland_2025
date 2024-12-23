import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SEND_EMAIL = "chris.ware.dev@gmail.com";
const PASSWORD = "eayw aboq lrso ugqx";
const ADDITIONAL_EMAIL = "chris.ware.dev@gmail.com";
const ADDITIONAL_EMAILII = "chris.ware.dev@gmail.com";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: SEND_EMAIL,
    pass: PASSWORD,
  },
});

export async function POST(request: Request) {
  const data = await request.json();
  const info = await transporter.sendMail({
    from: `"Portfolio Contact Form Submission" <${ADDITIONAL_EMAIL}>`,
    to: `${ADDITIONAL_EMAIL}, ${ADDITIONAL_EMAILII}`,
    replyTo: data.senderEmail,
    subject: "You have a new message!",
    text: "Hello world?",
    html: `<b>First Name:</b> <br/> 
            ${data?.firstName} <br/> <br/>
            <b>Last Name:</b> <br/> 
            ${data?.lastName} <br/> <br/>
            <b>Email:</b> </b> <br/> 
            ${data?.senderEmail} <br/> <br/>
            <b>Group Size:</b> <br/> 
            ${data?.companyName} <br/> <br/>
            <b>Length of Stay:</b> <br/> 
            ${data?.currentWebsiteUrl} <br/> <br/>
            <b>Message:</b> </b> 
            ${data?.message}`,
  });

  return NextResponse.json({
    messageId: info.messageId,
  });
}
