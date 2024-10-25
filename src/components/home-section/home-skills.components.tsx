import image1 from "../../assets/home/One.png";
import image2 from "../../assets/home/Two.png";
import image3 from "../../assets/home/Three.png";

const HomeSkillsComponent = () => {
  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="relative">
            <img
              src={image1}
              alt="image1"
              className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
              <p className="text-white bg-red-500 p-4 rounded-md text-3xl font-bold">
                Leadership
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={image2}
              alt="image1"
              className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
              <p className="text-white bg-blue-500 p-4 rounded-md text-3xl font-bold ">
                Experience
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={image3}
              alt="image1"
              className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
              <p className="text-white bg-green-500 p-4 rounded-md text-3xl font-bold ">
                Opportunity
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSkillsComponent;
