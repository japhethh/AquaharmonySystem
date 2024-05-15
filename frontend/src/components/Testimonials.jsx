import React from "react";
import { CUSTOMER_TESTIMONIALS } from "../assets/assets";
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
  // Function to generate star ratings
  const renderStars = (rate) => {
    return Array.from({ length: rate }, (_, index) => (
      <FaStar className="text-[#6246EA]"/>
    ));
  };

  return (
    <section className="bg-[#ffffff] px-5">
      <div className="container">
        <h1 className="pg-header text-2xl font-bold py-8 uppercase">
          WHAT CUSTOMERS SAY ABOUT US
        </h1>
        <div className="">
          <ul className="flex gap-4 overflow-x-scroll snap-x snap-mandatory py-2">
            {CUSTOMER_TESTIMONIALS.map((customer) => (
              <li
                key={customer.name}
                className="rounded-xl bg-white p-4 text-sm flex flex-col px-10 shadow-xl border-[1px] border-slate-200 "
              >
                <div className="flex justify-between items-center flex-col pb-2">
                  <div className="flex">{renderStars(customer.rate)}</div>
                  <h3 className="font-bold text-md">{customer.product}</h3>
                </div>
                <p className="customer_feedback text-center text-[12px] leading-4 font-semibold text-gray-500">
                  {customer.feedback}
                </p>
                <div className="font-bold flex flex-col justify-center items-center text-gray-500">
                  <p className="mt-auto pt-4 border-t ">
                    <span className="">{customer.customerName}</span>
                  </p>
                  <p>
                    <span className="italic">{customer.date}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
