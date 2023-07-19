import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
// import ContactForm from './ContactForm';
// import Form from './Form';



const Contact = () => {
  return (
    <div className="py-12">
      <h1 className="text-[#eff0f5] text-7xl text-center sm:text-4xl drop-shadow-[0_1px_1.3px_#cc00ff] font-[300] sm:py-12">
        CONTACT US
      </h1>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="item"> */}
          <div className="flex gap-8 text-white my-12 justify-start">
          <div className="flex-1 pl-4 my-12 mx-12 justify-start" >
            <p>
              Duis suscipit egestas ullamcorper. Cras porta nulla et tristique pellentesque.
              Praesent finibus mauris eu sollicitudin interdum. Morbi et blandit quam. Donec
              vitae massa purus. Curabitur nunc mauris, iaculis a nibh at, ultricies sodales
              dolor.
            </p>
            <p>
              Curabitur pharetra velit eget dignissim varius. In vulputate elit at tortor
              pellentesque, non pulvinar neque consequat.
            </p>
          </div>

          <div className="flex-1 mb-8">
            <h4 className="label mb-2">Phone</h4>
            <p className='text-3xl'>
              <Link to="tel:+770221770505">+77 022 177 05 05</Link></p>
              <h4 className="label mb-2 mt-4">Email</h4>
            <p className='text-3xl'>
              <Link to="mailto:frenifyteam@gmail.com">frenifyteam@gmail.com </Link>          
             </p>
          </div>

          <div className="flex-1">
            <h4 className="label text-grey">OFFICE</h4>
            <p className='text-3xl'>124 S Main St, Scottville, MI</p>
            <p className='text-3xl'>49454, United States</p>

          </div>
        </div>

          {/* <Form/> */}
          {/* <ContactForm/> */}
  <div className="fn_cs_contact_form">
  <form
    action="/"
    method="post"
    className="contact_form"
    id="contact_form"
    autoComplete="off"
  >
    <div className="grid grid-cols-2 gap-4 px-12 mx-12 my-12 py-12">
      <div>
        <input
          id="name"
          type="text"
          placeholder="Your Name *"
          className="w-[95%] px-4 py-6 my-2 border border-gray-300 rounded-lg bg-transparent"
          style={{ background: 'none' }}
        />
      </div>
      <div>
        <input
          id="email"
          type="text"
          placeholder="Your Email *"
          className="w-[95%] px-4 py-6 my-2 border border-gray-300 rounded-lg bg-transparent"
          style={{ background: 'none' }}
        />
      </div>
      <div>
        <input
          id="tel"
          type="text"
          placeholder="Your Phone (optional)"
          className="w-[95%] px-4 py-6 my-2  border border-gray-300 rounded-lg bg-transparent"
          style={{ background: 'none' }}
        />
      </div>
      <div>
        <input
          id="subject"
          type="text"
          placeholder="Topic (optional)"
          className="w-[95%] px-4 py-6 my-2  border border-gray-300 rounded-lg bg-transparent"
          style={{ background: 'none' }}
        />
      </div>
      <div className="col-span-2">
        <textarea
          id="message"
          placeholder="Your Message *"
          defaultValue={""}
          className="w-[97%] h-64 px-12 py-12 my-2 border border-gray-300 rounded-lg bg-transparent"
          style={{ background: 'none' }}
        />
      </div>

<div className="flex flex-row items-center gap-4">
  <div className="flex-shrink-0">
    <label className="fn__checkbox">
      <input type="checkbox" className="form-select px-4 py-3 rounded-full" /> 
    </label>
  </div>
  <div className='text-white'>
    <p>
      I’m okay with getting emails and having that activity tracked to
      improve my experience.
    </p>
  </div>
</div>

</div>
<Button onClick={() => console.log('Button clicked!')}className="flex justify-start ml-12 mx-12 my-12" >Send Message</Button>


  </form>

</div>


      </div>
  );
};

export default Contact;
