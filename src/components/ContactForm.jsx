"use client";
import {useForm} from "react-hook-form";

const ContactForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input placeholder="Your Name" {...register("yourname", {required: true})} type="text" className="rounded-lg bg-black p-1 focus:outline-none focus:shadow-md focus:shadow-blue-200"/>
        <input placeholder="Your Email" {...register("email", {required: true})} type="email" className="rounded-lg bg-black p-1 focus:outline-none focus:shadow-md focus:shadow-blue-200"/>
        <input placeholder="Your Subject" {...register("email", {required: true, maxLength: 50})} type="text" className="rounded-lg bg-black p-1 focus:outline-none focus:shadow-md focus:shadow-blue-200"/>
        <textarea placeholder="Enter Your Message" className="rounded-lg bg-black p-1 h-20 resize-none focus:outline-none focus:shadow-md focus:shadow-blue-200"/>
        <button type="submit" className="bg-sky-600 text-white hover:bg-sky-500 w-32 h-12 rounded-lg">Send Message</button>
    </form>
  )
}

export default ContactForm