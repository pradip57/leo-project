import { FaEnvelope } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const CompanyContactHeaderComponent = () => {
  return (
    <>
      <div className="text-white font-semibold p-2 w-full md:h-11 bg-[rgb(50,126,45)] flex flex-col sm:flex-row justify-between items-center sm:justify-evenly h-16">
        <div className="flex gap-1">
          <FaEnvelope className="mt-1" />
          <p>ldc325m@gmail.com</p>
        </div>
        <div className="flex gap-1">
          <FaLocationPin className="mt-1" />
          <p>Basundhara - Kathmandu, Nepal</p>
        </div>
      </div>
    </>
  );
};

export default CompanyContactHeaderComponent;
