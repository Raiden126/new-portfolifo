"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the validation schema
const schema = yup.object().shape({
  yourname: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  subject: yup.string().required("Subject is required").max(50, "Subject cannot exceed 50 characters"),
  message: yup.string().required("Message is required")
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const { yourname, email, subject, message } = data;
    const mailtoLink = `mailto:guddupaul145@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${yourname}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <input
          placeholder="Your Name"
          {...register("yourname")}
          type="text"
          className="rounded-lg bg-black p-1 focus:outline-none focus:shadow-md focus:shadow-blue-200"
        />
        {errors.yourname && <p className="text-red-500 text-sm">{errors.yourname.message}</p>}
      </div>

      <div className="flex flex-col">
        <input
          placeholder="Your Email"
          {...register("email")}
          type="email"
          className="rounded-lg bg-black p-1 focus:outline-none focus:shadow-md focus:shadow-blue-200"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col">
        <input
          placeholder="Your Subject"
          {...register("subject")}
          type="text"
          className="rounded-lg bg-black p-1 focus:outline-none focus:shadow-md focus:shadow-blue-200"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>

      <div className="flex flex-col">
        <textarea
          placeholder="Enter Your Message"
          {...register("message")}
          className="rounded-lg bg-black p-1 h-20 resize-none focus:outline-none focus:shadow-md focus:shadow-blue-200"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button type="submit" className="bg-sky-600 text-white hover:bg-sky-500 w-32 h-12 rounded-lg">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
