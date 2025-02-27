

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review: "Excellent service! Highly recommended. The team was very professional and exceeded my expectations.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    review: "Very good experience. The service was prompt, and the quality was top-notch. Would definitely come again!",
  },
];

const ReviewComponent = () => {
  return (
    <div className=" p-2 mt-5 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
      
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <div className="flex text-yellow-400">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-2">{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewComponent;
