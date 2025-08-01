"use client";
import "../components/index.css";

export const CommentsData = [
  {
    id: 1,
    img: "../assets/profile.jpg",
    username: "Joe Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    id: 2,
    img: "../assets/profile.jpg",
    username: "Sey",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Comments = () => {
  return (
    <div className="comments-wrapper">
      <h4>Recent Comments</h4>
      <div className="comment-section">
        {CommentsData.map((item) => (
          <div className="comment-content" key={item.id}>
            <img className="comment-image" src={item.img} alt={item.username} />
            <div className="comment-content-2">
              <h5>{item.username}</h5>
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
