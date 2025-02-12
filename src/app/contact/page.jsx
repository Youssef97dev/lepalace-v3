import React from "react";
import Details from "./components/Details";
import Mapbox from "./components/MapBox";
import ContactForm from "./components/ContactForm";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 pb-28 pt-5 pl-2 pr-2 lg:pl-80 lg:pr-10">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-start gap-5 lg:justify-between items-center text-yellow_color">
        <Mapbox />
        <Details />
      </div>

      <ContactForm />
    </div>
  );
};

export default page;
