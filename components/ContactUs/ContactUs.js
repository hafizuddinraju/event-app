import { useRef } from "react";
import emailjs from '@emailjs/browser';
const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_egp57ne', 'template_9fq8zfg', e.target, 'sPddVwWTOVuO9RguH')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="bg-[url('https://images.unsplash.com/photo-1565038930214-09566ed2149b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] py-6 lg:py-8 bg-cover bg-bottom">
            <div className="container mx-auto">
                <div className="p-6 lg:w-2/4 w-2/3 mx-auto bg-[#FBF6F3] bg-opacity-40">
                    <h4 className="text-4xl text-center capitalize mb-4 text-[#14172A] font-bold py-2">get in touch</h4>
                    <form className="space-y-6" rel={form} onSubmit={sendEmail}>
                        <div>
                            <label className="label">Name</label>
                            <input id="name" name="user_name" type="text" placeholder="your name" className="w-full p-3 rounded border-b bg-transparent focus:outline-none focus:border-base-100 focus:border placeholder-white" />
                        </div>
                        <div>
                            <label className="label">Email</label>
                            <input id="email" name="user_email" type="email" placeholder="Email Address" className="w-full p-3 rounded border-b bg-transparent focus:outline-none focus:border-base-100 focus:border placeholder-white" />
                        </div>
                        <div>
                            <label className="label ">Message</label>
                            <textarea id="message" name="message" rows="3" placeholder="Message" className="w-full p-3 rounded border-b bg-transparent focus:outline-none focus:border-base-100 focus:border placeholder-white" ></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold uppercase rounded bg-[#0EA5E9] text-base-100 ">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;