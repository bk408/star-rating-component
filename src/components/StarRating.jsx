import { useState } from "react";

const StarRating = () => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-container">
      <div className="title">
        <h2>StarRating</h2>
      </div>
      <div className="star-details">
        {stars.map((item) => (
          <div key={item.id}>
            <span
              onMouseEnter={() => setRating(item)}
              onMouseLeave={() => setRating(item)}
              onClick={() => setHover(item)}
              style={{
                background: item <= (hover || rating) ? "yellow" : "gray",
                border: "none",
                borderRadius: "50%",
              }}
            >
              &#9734;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
