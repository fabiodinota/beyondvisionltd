import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const InquiryForm = () => {
  const [state, handleSubmit] = useForm("xzboqnwj");

  const [amountSocial, setAmountSocial] = useState([{ social: "" }]);
  const handleClick = () => {
    setAmountSocial([...amountSocial, { social: "" }]);
  };
  const handleSocialRemove = () => {
    const newSocial = [...amountSocial];
    newSocial.splice(0, 1);
    setAmountSocial(newSocial);
  };
  if (state.succeeded) {
    return (
      <p className="text-text py-10 font-semibold w-[400px]">
        Thanks for sending a submission! We&apos;ll review it thoroughly and
        you&apos;ll hear back from us as soon as possible
      </p>
    );
  }

  return (
    <>
      <form
        action="https://formspree.io/f/xzboqnwj"
        method="POST"
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
            name="firstName"
            required
          />
          <label className="floating-label text-placeholders">First Name</label>
          <ValidationError
            prefix="Please enter your first name."
            field="username"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="text"
            id="lastname"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            name="lastname"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Last Name
          </label>
          <ValidationError
            prefix="Please enter your last name."
            field="lastname"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">Email</label>
          <ValidationError
            prefix="Please enter a valid email adresss."
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="tel"
            id="phone"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            name="phone"
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Phone Number
          </label>
          <ValidationError
            prefix="Please enter a valid phone number."
            field="phone"
            errors={state.errors}
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-text text-[20px] pb-10 font-semibold">
            Add Social Media Account
          </p>
          <div>
            <button
              onClick={() => handleSocialRemove()}
              className="text-text text-[35px] pb-10 font-semibold pr-2"
            >
              -
            </button>
            <button
              onClick={handleClick}
              className="text-text text-[35px] pb-10 font-semibold pl-2"
            >
              +
            </button>
          </div>
        </div>
        {amountSocial.map((_social, index) => (
          <div key={index} className="floating-label-group pb-12 w-full">
            <input
              type="text"
              name="social"
              id="social"
              className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
              autoComplete="off"
              autoFocus
              required
            />
            <label className="floating-label text-placeholders">URL</label>
            <ValidationError
              prefix="Please fill in this field."
              field="social"
              errors={state.errors}
            />
          </div>
        ))}
        <div className="floating-label-group pb-8 w-full">
          <textarea
            id="about"
            className="form-control bg-transparent border-b-4 w-full text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
            name="about"
          />
          <label className="floating-label text-placeholders">
            Tell us a bit about yourself and your content
          </label>
          <ValidationError
            prefix="Please fill in this field."
            field="about"
            errors={state.errors}
          />
        </div>
        <button
          className="text-black rounded-full  bg-yellow h-[70px] w-full shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </>
  );
};

export default InquiryForm;
