import Des from "./Des";
import ReviewComponent from "./Review";


const Profile = () => {
 
  return (
    <div className="flex justify-center">
    <div className="w-[60%]">
    <div className="flex flex-col md:flex-row p-2">
    
      <div className="flex-[2] p-2">
        
        <img
          src="public/noavtar.jpg"
          alt="Product Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:p-6 p-3 flex flex-col flex-[5]">
        <h1 className="md:text-4xl text-xl font-bold">name</h1>
        <div className="flex items-center mt-2">
          <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
          <span className="text-sm text-gray-500 ml-2">
            {"("}122{")"}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-xl font-semibold text-red-500">
            Rs.199
          </span>
          
        </div>
        <p className="mt-2 text-gray-700">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </p>
      </div>
    </div>
    <Des/>
    <ReviewComponent/>
    </div>
    </div>
  );
};

export default Profile;
