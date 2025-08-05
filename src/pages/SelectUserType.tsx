import { NavLink } from "react-router-dom";
import "../pages/auth.css";

export default function SelectUserType() {
  return (
    <div className="auth-wrapper-2">
      <div className="auth-form-2">
        <img src="/assets/festalive-wh.png" alt="Festalive Logo" className="auth-logo" />
        <h2>What brings you to Festalive?</h2>

        <div className="user-type-buttons">
          <NavLink to="/signup/user" className="user-type-btn">🎟 I want to buy tickets</NavLink>
          <NavLink to="/signup/creator" className="user-type-btn">✨ I’m a Creator</NavLink>
          <NavLink to="/signup/organizer" className="user-type-btn">🎤 I’m an Organizer</NavLink>
        </div>
      </div>
    </div>
  );
}
