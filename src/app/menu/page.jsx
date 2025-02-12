import Slides from "./components/Slides";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="w-full text-primary_2 text-center mb-20 mt-28 lg:mt-5">
      <Suspense>
        <Slides />
      </Suspense>
    </div>
  );
};

export default page;
