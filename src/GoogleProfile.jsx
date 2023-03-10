import utils from "./loginUtils";

// we can do useState here instead for this var?
let loggedOn = false;

function login() {
  utils.googleLogIn();
  loggedOn = true;
}

function logout() {
  utils.googleLogOut();
  loggedOn = false;
}

const GoogleProfile = () => {
  utils.getDirectories();

  // ----- there's gotta be a cleaner way with css?
  let dynWidths = [];
  if (loggedOn) {
    dynWidths = ["85%", "15%"];
  } else {
    dynWidths = ["100%", "0%"];
  }
  // -------------------------------------------

  return (
    <div className="buttonsContainer">
      <button
        onClick={login}
        className="btn-login"
        style={{ width: dynWidths[0] }}
      >
        <span
          className="fa-brands fa-google span-button"
          aria-hidden="true"
        ></span>
        <span className="sr-only span-button">Google Sign In</span>
      </button>
      {loggedOn ? (
        <button
          onClick={logout}
          className="btn-logout"
          style={{ width: dynWidths[1] }}
        >
          <span
            className="fa-regular fa-circle-xmark span-button"
            aria-hidden="true"
          ></span>
          <span className="sr-only span-button">Google Sign Out</span>
        </button>
      ) : null}
    </div>
  );
};

export default GoogleProfile;
