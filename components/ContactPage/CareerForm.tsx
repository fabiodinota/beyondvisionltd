import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const InquiryForm = () => {
  const [state, handleSubmit] = useForm("xlezkqvl");
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
        action="https://formspree.io/f/xlezkqvl"
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
            name="First Name"
            autoFocus
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
            name="Last Name"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
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
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            name="Email"
            required
          />
          <label className="floating-label text-placeholders">Email</label>
          <ValidationError
            prefix="Please enter a valid email adress."
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
            name="Phone Number"
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Phone Number
          </label>
          <ValidationError
            prefix="Please enter a phone number."
            field="phone"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full">
          <textarea
            id="casestudies"
            className="form-control bg-transparent border-b-4 w-full text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            name="Tell us about your case studies"
            required
          />
          <label className="floating-label text-placeholders">
            Tell us about your case studies
          </label>
          <ValidationError
            prefix="Please tell us about your case studies."
            field="casestudies"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full">
          <textarea
            id="why"
            className="form-control bg-transparent border-b-4 w-full text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            name="Why do you want a career at Beyond Vision?"
            required
          />
          <label className="floating-label text-placeholders">
            Why do you want a career at Beyond Vision?
          </label>
          <ValidationError
            prefix="Please enter a reason."
            field="why"
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
