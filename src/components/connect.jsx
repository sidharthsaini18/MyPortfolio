import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Connect = () => {
  const [inputData, setInputData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const form = useRef();

  const validate = () => {
    const newErrors = {};

    if (!inputData.from_name.trim()) {
      newErrors.from_name = "Name is required";
    }

    if (!inputData.from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputData.from_email)) {
      newErrors.from_email = "Invalid email format";
    }

    if (!inputData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!validate()) return; // Stop submission if validation fails

    emailjs
      .sendForm("service_g4y8jf7", "template_5b6aepp", form.current, {
        publicKey: "dC6VuwSSGzZlEkV6C",
      })
      .then(
        () => {
          toast.success("Successfully sent!");
          setInputData({ from_name: "", from_email: "", message: "" }); // Clear form after success
        },
        (error) => {
          toast.error("Failed to send...", error.text);
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
        className="w-md-50 w-75 border border-1 rounded area text-white"
        type="text"
        name="from_name"
        placeholder="Name"
        value={inputData.from_name}
        onChange={handleChange}
      />
      {errors.from_name && <p style={{ color: "red" }}>{errors.from_name}</p>}

      <label className="m-1">Email:</label>
      <input
        className="w-md-50 w-75 border border-1 rounded area text-white"
        type="email"
        name="from_email"
        placeholder="Email"
        value={inputData.from_email}
        onChange={handleChange}
      />
      {errors.from_email && <p style={{ color: "red" }}>{errors.from_email}</p>}

      <label className="m-1">Message:</label>
      <textarea
        className="w-md-50 w-75 rounded area text-white"
        name="message"
        placeholder="Message"
        value={inputData.message}
        onChange={handleChange}
      />
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <input
        className="btn btn-outline-primary w-25 my-3"
        type="submit"
        value="Send"
      />
    </form>
  );
};

export default Connect;
