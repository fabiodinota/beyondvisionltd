import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const InquiryForm = () => {
  const [state, handleSubmit] = useForm("mvolneap");
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
        action="https://formspree.io/f/mvolneap"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap w-full pt-10"
      >
        <div className="floating-label-group pb-8 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            type="text"
            id="firstname"
            name="firstname"
            
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">First Name</label>
          <ValidationError
            prefix="Please enter your first name."
            field="firstname"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-8 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="text"
            id="lastname"
            name="lastname"
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
        <div className="floating-label-group pb-8 w-full ">
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
            prefix="Please enter a valid email adress."
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="floating-label-group pb-8 w-full">
          <textarea
            id="subject"
            className="form-control bg-transparent border-b-4 w-full text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
            name="subject"
          />
          <label className="floating-label text-placeholders">Subject</label>
          <ValidationError
            prefix="Please fill in this field."
            field="subject"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-8 w-full">
          <textarea
            id="inquiring"
            className="form-control bg-transparent border-b-4 w-full text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
            name="inquiring"
          />
          <label className="floating-label text-placeholders">
            What are you inquiring about?
          </label>
          <ValidationError
            prefix="Please fill in this field."
            field="inquiring"
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
