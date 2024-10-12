import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-black shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
          </p>

          <div className="mt-12">
            <h2 className="text-yellow-50-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <FaEnvelope size={20} color="#007bff" />
                </div>
                <a href="mailto:info@example.com" className="text-[#007bff] text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={20} color="#007bff" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={20} color="#007bff" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={20} color="#007bff" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full text-white rounded-md py-2.5 px-4 border text-sm outline-red-600 bg-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full text-white rounded-md py-2.5 px-4 border text-sm outline-red-600 bg-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full text-white rounded-md py-2.5 px-4 border text-sm outline-red-600 bg-black"
          />
          <textarea
            placeholder="Message"
            className="w-full text-white rounded-md py-2.5 px-4 border text-sm outline-red-600 bg-black"
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-red-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
