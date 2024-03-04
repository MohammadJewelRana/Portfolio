import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { clear } from 'localforage';
import SectionTitle from '../Shared/SectionTitle';

const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rpce64n', 
    'template_t1k90cj',
     form.current, 'ux5lTHXEuz49dDg-J')
    
      .then((result) => {
          console.log(result);
          e.target.reset()
          toast('Email sent successfully.....')

      }, (error) => {
          console.log(error.text);
          toast('Failed to sent email....')
      });
  };

 


    return (
        <div id='contact' name='contact' className=' text-black w-full  pt-16 '>
            <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full mb-8'>
          
                <SectionTitle
                title={' Contact'}
                subText={"Submit the form below or shoot me an email -  "}
                extra={' js.rana0326@gmail.com '}
                ></SectionTitle>


                <form ref={form} onSubmit={sendEmail} className="w-full mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className=" block  text-white font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"
                        
                            className="  border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline bg-white "
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className=" block  text-white font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="from_email"
                            
                            className=" border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline  bg-white"
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className=" block  text-white font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                          
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-32 resize-none bg-white"
                            placeholder="Your Message"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit" value="Send"
                            className="       bg-green-500   text-xl hover:bg-green-400 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline  transition-all duration-300"
                        >
                            Let's Collaborate
                        </button>
                    </div>
                </form>







            </div>


<ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;