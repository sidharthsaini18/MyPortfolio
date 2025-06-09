import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g4y8jf7", "template_5b6aepp", form.current, {
        publicKey: "dC6VuwSSGzZlEkV6C",
      })
      .then(
        () => {
          toast.success("Sucessfully send!");
        },
        (error) => {
          toast.error("FAILED to send...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="area d-flex flex-column justify-content-center align-items-center m-3"
    >
      <h3 className="mt-4">Connect With Me!</h3>
      <div className="line w-25"></div>
      <label className="mt-3 m-1">Name:</label>
      <input
        className=" w-md-50 w-75 border border-1 rounded area text-white"
        type="text"
        name="from_name"
      />
      <label className="m-1">Email:</label>
      <input
        className="w-md-50 w-75  border border-1 rounded area text-white"
        type="email"
        name="from_email"
      />
      <label className="m-1">Message</label>
      <textarea
        className="w-md-50 w-75   rounded area text-white "
        name="message"
      />
      <input
        className="btn btn-outline-primary w-25 my-3"
        type="submit"
        value="Send"
      />
    </form>
  );
};
export default Connect;
