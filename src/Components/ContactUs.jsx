import { FaFacebook, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="md:p-10 shadow-sm">
      <div className="my-10">
        <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('Contact.jpg')] h-full lg:h-[500px] bg-cover bg-center rounded-md ">
          <div className="flex flex-col md:flex-row lg:justify-center gap-3  h-full">
            {/* left */}
            <div className="text-white lg:w-[40%] flex flex-col justify-center text-lg pl-5 py-5">
                <h3 className="text-2xl md:text-4xl font-bold font-lato mb-4">Get in touch</h3>
                <p className="text-lg"> Our dedicated team is here to assist you in any way we can</p>
                <div className="space-y-4 my-12">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Bangladesh, Dhaka City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>artisanalcrafts@business.com</span>
				</p>
			</div>
            <div className="flex gap-3 my-4 md:my-10 text-xl">
            <FaFacebook />
            <FaTwitter />
            <FaWhatsapp />
            <FaGithub />
            </div>
            </div>

            {/* right */}
            <div className=" w-full lg:w-[40%]">
              <section className="p-6 dark:text-gray-800">
                <form
                  noValidate=""
                  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-white"
                >
                  <h2 className="w-full text-3xl font-bold leading-tight font-lato">
                    Please Fill Up Form
                  </h2>
                  <div>
                    <label htmlFor="name" className="block mb-1 ml-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required=""
                      className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 ml-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required=""
                      className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 ml-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      type="text"
                      placeholder="Message..."
                      className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-orange-500 hover:dark:orange-600 dark:text-white"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
