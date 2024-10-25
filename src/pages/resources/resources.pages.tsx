import resource1 from "../../assets/resource logo/resource1.png";
import resource2 from "../../assets/resource logo/resource2.png";
import resource3 from "../../assets/resource logo/resource3.png";
import resource4 from "../../assets/resource logo/resource4.png";
import resource5 from "../../assets/resource logo/resource5.png";
import resource6 from "../../assets/resource logo/resource6.png";
import resource7 from "../../assets/resource logo/resource7.png";
import resource8 from "../../assets/resource logo/resource8.jpg";

const ResourcesPage = () => {
  return (
    <>
      <div className="bg-[#F9E1E1] w-full flex flex-wrap items-center justify-evenly  p-4">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 p-4">
          <img src={resource1} className="h-52" alt="resource_logo" />
          <img src={resource2} className="h-52" alt="resource_logo" />
          <img src={resource3} className="h-52" alt="resource_logo" />
          <img src={resource4} className="h-52" alt="resource_logo" />
          <img src={resource5} className="h-52" alt="resource_logo" />
          <img src={resource6} className="h-52" alt="resource_logo" />
          <img src={resource7} className="h-52" alt="resource_logo" />
          <img src={resource8} className="h-52" alt="resource_logo" />
        </div>
      </div>
      <div className="text-black font-semibold p-2 w-full md:h-20 bg-[#F9E1E1]  text-center">
        <div>
          <p>For more resources:</p>
          <a
            href="https://drive.google.com/drive/folders/1XujGUh267yUz4JHgcK83ciAjxX4Fc3PO"
            className=" font-bold"
          >
            Click here
          </a>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
