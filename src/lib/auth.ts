import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USERGMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: false,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const VarificaitonUrl = `${process.env.APP_URL}/verify-email?token=${token}`;
      const info = await transporter.sendMail({
        from: '"Email Varificaiton from SkillBridge" <skillbridge@edu.com>',
        to: user.email!,
        subject: "Please verify your email for SkillBridge",
        text: `Verify your email by clicking the link below: ${VarificaitonUrl}`,
        html: `
  <div style="max-width:600px;margin:0 auto;padding:24px;font-family:Arial,Helvetica,sans-serif;background:#ffffff;border-radius:8px;border:1px solid #eaeaea;">
    
    <h2 style="color:#111827;margin-bottom:16px;"><strong>${user.name}</strong> Welcome to SkillBridge 🎓</h2>
    
    <p style="color:#374151;font-size:15px;line-height:1.6;">
      Thanks for signing up! To get started, please verify your email address by clicking the button below.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="${VarificaitonUrl}"
         style="background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:bold;display:inline-block;">
        Verify Email
      </a>
    </div>

    <p style="color:#6b7280;font-size:14px;line-height:1.6;">
      If the button doesn’t work, copy and paste this link into your browser:
    </p>

    <p style="word-break:break-all;color:#2563eb;font-size:14px;">
      ${VarificaitonUrl}
    </p>

    <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0;">

    <p style="color:#9ca3af;font-size:13px;">
      If you did not create a SkillBridge account, no action is required.
    </p>

    <p style="color:#9ca3af;font-size:13px;">
      — SkillBridge Team
    </p>
  </div>
  `,
      });
      } catch (error) {
        throw new Error("Error sending verification email:", error as any);
      }
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "STUDENT",
      },
      status: {
        type: "string",
        required: true,
        defaultValue: "ACTIVE",
      },
    },
  },
});
