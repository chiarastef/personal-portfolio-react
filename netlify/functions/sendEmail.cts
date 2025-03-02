import emailjs from "@emailjs/nodejs";

exports.handler = async (request) => {
  const body = JSON.parse(request.body);

  const templateParams = {
    user_name: body.name,
    user_email: body.email,
    message: body.message,
  };

  try {
    await emailjs.send(
      process.env.VITE_EMAILJS_SERVICE_ID,
      process.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.VITE_EMAILJS_PUBLIC_KEY,
        privateKey: process.env.VITE_EMAILJS_PRIVATE_KEY,
      }
    );

    return {
      statusCode: 200,
      body: `Email sent successfully`,
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: `An error occurred sending the email: ${e}`,
    };
  }
};
