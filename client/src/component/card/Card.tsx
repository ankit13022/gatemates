import { useNavigate } from "react-router-dom";

const ReportCard = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/profile"); // Navigate to the profile page
  };
  return (
    <div className="max-w-4xl flex bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      {/* Left Section with Image */}
      <div className=" w-1/5">
        <img
          src="public/noavtar.jpg" // Replace this with your actual image URL
          alt="Electric Bus"
          className="w-full h-full object-cover"
        />
        {/* Overlay Text */}
      </div>

      {/* Right Section with Details */}
      <div className="w-4/5 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold">Beard trimming & styling</h2>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="text-yellow-400">⭐</span>
            <span className="ml-1">4.88 (135K reviews)</span>
          </div>

          <p className="text-gray-700 text-sm">
            ghvc whjevdewvdhevhy ebdwe dewudedewd webde weudbwe ew d
          </p>
          {/* Study Period Info */}
        </div>
        <button
          className="bg-purple-500 px-4 py-1 text-white rounded-2xl w-[8rem] self-end "
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
