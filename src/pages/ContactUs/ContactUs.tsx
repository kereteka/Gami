import ContactForm from "../../components/ContactForm";
import Loading from "../../components/Loading";

const ContactUs = () => {
  return (
    <div className=" h-[100%] sm:flex w-[100%] m-auto bg-gray-100 pt-10 pb-5 container">
      <div className="basis-1/2 px-4">
        <div className="text-4xl leading-10 font-semibold pb-2">
          <h1 className="font-semibold text-4xl text-blue-gray-800 leading-10 sm:leading-none">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <p className="text-xl font-normal text-blue-gray-400 leading-7 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
          </p>
        </div>
        <ContactForm />
      </div>
      <div className=" h-[473px] pt-4 sm:pt-16 lg:pt-0 basis-1/2 px-2">
        <div className="w-full h-full rounded-lg shadow-xl border border-solid border-white ">
          <iframe
            title="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.1246885682895!2d29.036556484478034!3d41.088122214066715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6068d9287a3%3A0x78886ef080e34d12!2sU%C3%A7aksavar%20Sitesi!5e0!3m2!1sen!2str!4v1676305198866!5m2!1sen!2str"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
