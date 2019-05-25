import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="col-10 mx-auto col-md-6 my-3">
        <Title title="contact us" />
        <form
          className="mt-5"
          action="https://formspree.io/h.d2475@yahoo.com"
          method="POST"
        >
          {/* first */}
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="John Smith"
            />
          </div>
          {/* email */}
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="email@email.com"
            />
          </div>
          {/* subject */}
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="subject"
              placeholder="important!!!!!"
            />
          </div>
          {/* message1 */}
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows="10"
              placeholder="hello ther body"
            />
          </div>
          {/* submit */}
          <div className="form-group mt-3">
            <input
              className="form-control bg-primary text-white"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
