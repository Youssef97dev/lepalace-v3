"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-96">
      <h1 className="text-[30px] lg:text-[48px] lg:leading-[48px] leading-[36px] uppercase text-heading_color">
        le palace marrakech
      </h1>
      <p className="text-[14px] leading-[24.5px] text-white">
        {t("about.content_1")}
        <br />
        <br />
        {t("about.content_2")}
      </p>
    </div>
  );
};

export default About;
