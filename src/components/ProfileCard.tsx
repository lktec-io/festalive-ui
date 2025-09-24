"use client";
import { useEffect, useState } from "react";
import "../../src/components/index.css";

export const ProfileCard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("Logged in user:", parsedUser); // Debug: angalia data
      setUser(parsedUser);
    }
  }, []);
  if (!user) return <p>Loading profile...</p>;
  // Tumia profilePic inayotoka backend (Cloudinary URL)
  const profileImage = user.profilePic || "/assets/profile.jpg";

  // Display name: organizer => organizationName, user => email/fullName?, creator => stageName
  const displayName =
    user.organizationName || user.fullName || user.stageName || "Anonymous";

  // Role
  const role = user.role || "User";

  return (
    <div className="profile-card-contents">
      <div className="profile-item">
        <img
          src={profileImage}
          alt={displayName}
          className="profile-image"
        />
        <h6 className="profile-name">{displayName}</h6>
        <h5 className="profile-role">{role}</h5>
      </div>
    </div>
  );
};
