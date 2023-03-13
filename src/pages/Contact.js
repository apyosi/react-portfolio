import React from "react";

function Contact(props) {
  return (
    <main id="contact">
      <h1 className="text-center">Contact</h1>
      <img
        className="w-100 mb-3"
        src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"
        alt="lighting-line"
      />
      <form className="w-75 m-auto">
        <div className="mb-3">
          <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control bg-warning"
            id="exampleInputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control bg-warning"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control bg-warning"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Contact;
