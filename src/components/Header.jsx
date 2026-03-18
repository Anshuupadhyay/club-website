import logo from "./assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img
        src={logo}
        alt="रघुनन्दन पुस्तकालय एवं क्लब"
        className="app-logo bounce-logo"
      />
      <h2>रघुनन्दन पुस्तकालय एवं क्लब</h2>
    </div>
  );
}

export default Header;