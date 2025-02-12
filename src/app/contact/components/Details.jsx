import { FiMapPin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaMailBulk } from "react-icons/fa";

const Details = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-2 text-yellow_color">
      <h1 className="text-[16px] lg:text-[16px] lg:leading-[24px] leading-[24px] uppercase font-medium">
        {`Le Palace Marrakech Restaurant & Fine dining`}
      </h1>
      <div className="w-full flex justify-start items-center gap-3">
        <FiMapPin size={18} />
        <span>Av. Echouhada Rue Ahmed Chawqui Hivernage1</span>
      </div>
      <div className="w-full flex justify-start items-center gap-3">
        <FaInstagram size={18} />
        <span>@lepalacemarrakech</span>
      </div>
      <div className="w-full flex justify-start items-center gap-3">
        <FaWhatsapp size={18} />
        <span>+212 6 75 48 01 01</span>
      </div>
      <div className="w-full flex justify-start items-center gap-3">
        <FaMailBulk size={18} />
        <span>reservations@le-palacemarrakech.com</span>
      </div>
    </div>
  );
};

export default Details;
