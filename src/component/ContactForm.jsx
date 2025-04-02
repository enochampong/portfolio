import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  // Ensure correct env variable names
  const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log("Success:", result.text);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="column">
        <form className="cf" ref={form} onSubmit={sendEmail}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Your full name"
                name="name"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Your email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">
                Submit
              </button>
            </div>
            <div className="control">
              <button type="reset" className="button is-link is-light">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

// function ContactForm() {
//   const form = useRef();
//   const EMAIL_TEMPLATE_ID = import.meta.env.EMAIL_TEMPLATE_ID;
//   const EMAIL_SERVICE_ID = import.meta.env.EMAIL_SERVICE_ID;
//   const EMAILJS_PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         EMAIL_TEMPLATE_ID,
//         EMAIL_SERVICE_ID,
//         form.current,
//         EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           alert("message sent successfully...");
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="container">
//       <div className="column">
//         <form className="cf" ref={form} onSubmit={sendEmail}>
//           <div className="field">
//             <label className="label">Name</label>
//             <div className="control">
//               <input
//                 className="input"
//                 type="text"
//                 placeholder="Your full name"
//                 name="name"
//               />
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Email</label>
//             <div className="control has-icons-left has-icons-right">
//               <input
//                 className="input"
//                 type="email"
//                 placeholder="Your email"
//                 name="email"
//               />
//               <span className="icon is-small is-left">
//                 <i className="fas fa-envelope"></i>
//               </span>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Message</label>
//             <div className="control">
//               <textarea
//                 className="textarea"
//                 placeholder="Textarea"
//                 name="message"
//               ></textarea>
//             </div>
//           </div>

//           <div className="field is-grouped">
//             <div className="control">
//               <button type="submit" className="button is-link">
//                 Submit
//               </button>
//             </div>
//             <div className="control">
//               <button className="button is-link is-light">Cancel</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;
