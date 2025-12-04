// src/emailjs.js
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * initEmailJS - call once at app boot (or before first send)
 */
export function initEmailJS() {
  if (!PUBLIC_KEY) {
    console.warn("EmailJS public key missing. Make sure VITE_EMAILJS_PUBLIC_KEY is set.");
    return;
  }
  try {
    emailjs.init(PUBLIC_KEY);
  } catch (e) {
    console.error("EmailJS init error", e);
  }
}

/**
 * sendContactForm - sends a form element using sendForm
 * @param {HTMLFormElement} formEl
 * @returns {Promise}
 */
export function sendContactForm(formEl) {
  if (!SERVICE_ID || !TEMPLATE_ID) {
    return Promise.reject(new Error("Missing EmailJS service or template id in env"));
  }
  if (!formEl || !(formEl instanceof HTMLFormElement)) {
    return Promise.reject(new Error("Invalid form element passed to sendContactForm"));
  }
  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl);
}
