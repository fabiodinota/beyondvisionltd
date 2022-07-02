import React, { useState } from "react";
import { useForm } from "@formspree/react";

const InquiryForm = () => {
  const [state, handleSubmit] = useForm("mvolneap");
  const [amountSocial, setAmountSocial] = useState([{social: ""}]);

  const handleClick = () => { 
      setAmountSocial([...amountSocial, {social: ""}]);
  }
  const handleSocialRemove = () => {
    const newSocial = [...amountSocial];
    newSocial.splice(0, 1);
    setAmountSocial(newSocial);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap w-full pt-10"
      >
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            type="text"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">First Name</label>
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="text"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Last Name
          </label>
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            type="email"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">Email</label>
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="tel"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Phone Number
          </label>
        </div>
        <div className="flex w-full items-center justify-between">
        <p className="text-text text-[20px] pb-10 font-semibold">
          Add Social Media Account
        </p>
        <div>
        <button onClick={() => handleSocialRemove()} className="text-text text-[35px] pb-10 font-semibold pr-2">-</button>
        <button onClick={handleClick} className="text-text text-[35px] pb-10 font-semibold pl-2">+</button>
        </div>
       
        </div>
        {amountSocial.map((_social, index) => ( 
          <div key={index} className="floating-label-group pb-12 w-full">
            <input
              type="text"
              id="username"
              className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
              autoComplete="off"
              autoFocus
              required
            
            />
            <label className="floating-label text-placeholders">URL</label>
            </div>
            ))}
        <div className="floating-label-group pb-8 w-full">
          <textarea
            id="username"
            className="form-control bg-transparent border-b-4 w-full border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">
            Tell us a bit about yourself and your content
          </label>
        </div>
        <button
          className="text-black rounded-full  bg-yellow h-[70px] w-full shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default InquiryForm;
