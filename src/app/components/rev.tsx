import { Truck, Package, Shield } from "lucide-react";
import React from "react";

const Rev = () => {
  return (
    <div className="ml-">
      <section className="flex flex-col items-center mb-20">
        <h1 className="text-[27px] font-bold py-8">
          What Makes Us Different
        </h1>
        <div className="flex justify-center ml-5">
          <ul className="flex flex-col md:flex-row gap-20 md:justify-center mt-6">
            <li className=" ">
              <Truck />
              <h1 className="font-semibold">Next Day As Standard</h1>
              <p className="font-light">
                Order before 3pm for next day delivery
              </p>
            </li>
            <li className=" ">
              <Package />
              <h1 className="font-semibold">Easy Return</h1>
              <p className="font-light">
              14 Days Return For Free
              </p>
            </li>
            <li className=" ">
              <Shield />
              <h1 className="font-semibold">Secure Payments</h1>
              <p className="font-light">
              Secure Payments Server and Database Keeps Your Personal Info Safe
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Rev;
