import { Form, redirect, useActionData } from "react-router-dom";

export const Contact = () => {
  const errors = useActionData();
  return (
    <div className="contact">
      <h3>Contact</h3>
      <Form method="post" action="/help/contact">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          {errors?.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
          {errors?.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const errors = {};
  const message = data.get("message");
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "email is not valid";
  }
  if (typeof message !== "string" || message.length < 10) {
    errors.message = "message is not valid";
  }
  if (Object.keys(errors).length) {
    return errors;
  }
  return redirect("/");
};
