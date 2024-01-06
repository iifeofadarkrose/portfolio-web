import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const contactSection = document.getElementById('contact');
      const contactSectionTop = contactSection.offsetTop;

      if (scrolled > contactSectionTop - 300) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 30 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      id="contact"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <h1 className="py-4 text-4xl font-bold text-center text-white">Contact</h1>
      <form action="https://getform.io/f/b5c3b966-294b-4999-b976-a711d8446b43" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 text-white">Name</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name='name'/>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 text-white">Phone Number</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone"/>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-white" >Email</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name='email'/>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-white" >Subject</label>
          <input className="border rounded-lg p-3 flex border-gray-300" type="text" name='subject'/>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-white" >Message</label>
          <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10' name='message'/>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
            Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
