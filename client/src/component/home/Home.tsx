import { useNavigate } from "react-router-dom";

const services = [
  { name: "Cooking", icon: "💆‍♀️" },
  { name: "Cleaning", icon: "🧹" },
  { name: "Teaching", icon: "🖌️" },
];

const Home = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceName: string) => {
    navigate(`/services?category=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8">
      <div className="md:w-[85%] w-full flex justify-between items-center gap-10 p-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4 px-8">
          <h1 className="text-3xl font-bold">Home services at your doorstep</h1>
          <p className="text-lg text-gray-600">What are you looking for?</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg cursor-pointer"
                onClick={() => handleServiceClick(service.name)}
              >
                <span className="text-2xl">{service.icon}</span>
                <span className="text-sm font-semibold">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section (Images) */}
        <div className="w-full md:w-1/2 flex justify-center flex-wrap gap-4 p-4">
          <img
            src="/maid_cleaning.webp"
            alt="cleaning"
            className="w-[45%] h-60 rounded-lg shadow"
          />
          <img
            src="/maid_cooking.webp"
            alt="cooking"
            className="w-[45%] h-60 rounded-lg shadow"
          />
          <img
            src="/teaching.webp"
            alt="teaching"
            className="w-[93%] h-60 rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
