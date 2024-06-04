import './Navbar.css'

function Navbar() {
    return(
        <div className="navbar">
      <div className="left-section">
        <div className="icon">🔌</div>
        <span className="text">unplug ui</span>
      </div>
      <div className="right-section">
        <div className="icon">📝</div>
        <div className="icon">🛒</div>
        <div className="icon">✉️</div>
        <div className="icon">⚙️</div>
        <div className="icon">🇧🇷</div>
        <div className="user-section">
          <span className="user-name">Hi Rocky John</span>
          <div className="user-avatar">R</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;