// "use server";

// import React from "react";
// import { Resend } from "resend";
// import { validateString, getErrorMessage } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";

// const resend = ""

// export const sendEmail = async (formData: FormData) => {
//   const senderEmail = formData.get("senderEmail");
//   const message = formData.get("message");

//   // simple server-side validation
//   if (!validateString(senderEmail, 500)) {
//     return {
//       error: "Invalid sender email",
//     };
//   }
//   if (!validateString(message, 5000)) {
//     return {
//       error: "Invalid message",
//     };
//   }

//   let data;
//   // 
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return {
//     data,
//   };
// };
