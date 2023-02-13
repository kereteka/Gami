import React, { useState } from "react";
import Button from "./Button";
import Loading from "./Loading";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const defaultProp = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState<FormValues>(defaultProp);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = () => {
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.message === ""
    ) {
      alert("Please fill the required areas");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormValues(defaultProp);
      setButtonText("Message Submitted!");
      setTimeout(() => {
        setButtonText("Send Message");
      }, 2000);
    }, 2000);
  };

  return (
    <div>
      <form className="flex flex-col bg-gray-50 gap-6 w-full pl-4 pr-5 pt-7 pb-8 border border-solid border-white shadow-xl rounded-lg">
        <label>
          <input
            className="w-full rounded-lg h-[43px] box-border bg-gray-100 border border-solid border-gray-200 px-4 text-base leading-6 font-medium"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Full Name*"
            required
          />
        </label>
        <label>
          <input
            className="w-full rounded-lg h-[43px] box-border bg-gray-100 border border-solid border-gray-200 px-4 text-base leading-6 font-medium"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="E-Mail*"
            required
          />
        </label>
        <label>
          <p className=" text-blue-gray-800">
            {" "}
            Tell us more about your project*
          </p>
          <textarea
            name="message"
            className="w-full rounded-lg box-border min-h-[126px] bg-gray-100 border border-solid border-gray-200 px-4 text-base leading-6 font-medium resize-none mt-2"
            value={formValues.message}
            onChange={handleChange}
            required
          />
        </label>
      </form>
      <div className="flex items-center justify-center w-full m-auto pt-6 text-white">
        {isLoading ? (
          <Loading />
        ) : (
          <Button
            text={buttonText}
            onClick={handleClick}
            variant="darkShadow"
          />
        )}
      </div>
    </div>
  );
};
export default ContactForm;
