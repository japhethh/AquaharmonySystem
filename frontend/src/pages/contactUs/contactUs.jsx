import React from 'react'
import { assets } from '../../assets/assets'
const ContactUs = () => {
  const [result, setResult] = React.useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f6fb3124-fc84-4c83-a938-94bc7d42bb2c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="flex flex-col justify-center items-center py-6">
      <h1 className="text-sm text-gray-600">CONTACT US</h1>
      <h1 className="text-2xl font-semibold">GET IN TOUCH</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
      <div className="contact-col md:w-1/2 w-full" >
        <h3 className="text-2xl font-semibold flex flex-row items-center gap-2">
          <span>Send us a message</span> <img className="w-[30px]" src={assets.messageContact} alt="" />
        </h3>
        <p className="text-gray-600 mt-2">
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul className="mt-4">
          <li>Contact@greekstack.dev</li>
          <li>09511431876</li>
          <li>Quezon City</li>
        </ul>
      </div>

      <div className="contact-col md:w-1/2 w-full">
        <form onSubmit={onSubmit}>
          <label htmlFor="name" className="block font-semibold">Your name</label>
          <input type="text" name="name" placeholder="Enter your name" className="border border-gray-300 rounded-md py-2 px-3 mt-1 w-full" required/>
          <label htmlFor="phone" className="block font-semibold mt-4">Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your Mobile Phone" className="border border-gray-300 rounded-md py-2 px-3 mt-1 w-full" required/>
          <textarea name="message" rows="6" placeholder="Enter your message" className="border border-gray-300 rounded-md py-2 px-3 mt-4 w-full" required></textarea>
          <button type="submit" className="btn dark-btn mt-4 py-2 px-4 bg-black text-white">Submit now</button>
        </form>
        <span className="text-green-500 mt-2">{result}</span>  
      </div>
      </div>
    </div>
  )
}

export default ContactUs