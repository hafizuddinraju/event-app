const ContactUs = () => {
    return (
        <section className="bg-[url('https://images.unsplash.com/photo-1565038930214-09566ed2149b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] py-6 bg-cover bg-bottom">
            <div className="container mx-auto">
                <div className="p-6 w-2/4 bg-[#FBF6F3] bg-opacity-25">
                    <h4 className="text-xl capitalize mb-4 text-[#14172A] font-semibold">get in touch</h4>
                    <form className="space-y-6">
                        <div>
                            <label for="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="your name" className="w-full p-3 rounded border-b bg-transparent focus:outline-none focus:border-cyan-200 focus:border" />
                        </div>
                        <div>
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email Address" className="w-full p-3 rounded border-b bg-transparent focus:outline-none focus:border-blue-300 focus:border" />
                        </div>
                        <div>
                            <label for="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" placeholder="Message" className="w-full p-3 rounded border-b bg-transparent focus:outline-none focus:border-blue-300 focus:border" ></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold uppercase rounded bg-[#14172A] text-base-100 ">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;