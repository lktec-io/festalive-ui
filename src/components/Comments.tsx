"use client";
import "../components/index.css";

export const CommentsData = [
  {
    id: 1,
    img: "../assets/profile.jpg",
    username: "Alex Carter",
    comment: "Really enjoyed this post! Keep up the great work.",
  },
  {
    id: 2,
    img: "../assets/profile.jpg",
    username: "Maya Lin",
    comment: "This was super informative, thanks for sharing!",
  },
  {
    id: 3,
    img: "../assets/profile.jpg",
    username: "Samir Patel",
    comment: "Could use more details, but solid content overall.",
  },
  {
    id: 4,
    img: "../assets/profile.jpg",
    username: "Nia Brooks",
    comment: "Wow, this perspective really opened my eyes!",
  },
  {
    id: 5,
    img: "../assets/profile.jpg",
    username: "Liam Chen",
    comment: "Great insights, but I have a few questions.",
  },
  {
    id: 6,
    img: "../assets/profile.jpg",
    username: "Zoe Mwamba",
    comment: "Loved the examples you included here!",
  },
  {
    id: 7,
    img: "../assets/profile.jpg",
    username: "Elias Novak",
    comment: "This could be a game-changer for my project.",
  },
  {
    id: 8,
    img: "../assets/profile.jpg",
    username: "Aisha Khan",
    comment: "Super helpful, thanks for breaking it down.",
  },
  {
    id: 9,
    img: "../assets/profile.jpg",
    username: "Tomas Rivera",
    comment: "I disagree with some points, but well written.",
  },
  {
    id: 10,
    img: "../assets/profile.jpg",
    username: "Kira Sato",
    comment: "This is exactly what I was looking for!",
  },
  {
    id: 11,
    img: "../assets/profile.jpg",
    username: "Devon Walsh",
    comment: "Nice work, but could use more visuals.",
  },
  {
    id: 12,
    img: "../assets/profile.jpg",
    username: "Fatima Ali",
    comment: "Incredible content, bookmarked for later!",
  },
  {
    id: 13,
    img: "../assets/profile.jpg",
    username: "Ravi Sharma",
    comment: "Thanks for the tips, they’re spot on.",
  },
  {
    id: 14,
    img: "../assets/profile.jpg",
    username: "Clara Mendes",
    comment: "Really well explained, kudos!",
  },
  {
    id: 15,
    img: "../assets/profile.jpg",
    username: "Jaden Park",
    comment: "I’d love to see a follow-up on this topic.",
  },
  {
    id: 16,
    img: "../assets/profile.jpg",
    username: "Amara Osei",
    comment: "This post deserves more attention!",
  },
  {
    id: 17,
    img: "../assets/profile.jpg",
    username: "Luca Bianchi",
    comment: "Solid advice, I’m trying this out today.",
  },
  {
    id: 18,
    img: "../assets/profile.jpg",
    username: "Sofia Nguyen",
    comment: "Thanks for the clear and concise explanation.",
  },
  {
    id: 19,
    img: "../assets/profile.jpg",
    username: "Omar Hassan",
    comment: "Great read, but I have a different take.",
  },
  {
    id: 20,
    img: "../assets/profile.jpg",
    username: "Lila Gupta",
    comment: "Amazing post, learned a lot from this!",
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
