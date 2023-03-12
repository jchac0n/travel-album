import utils from "./loginUtils";

const GoogleProfile = () => {
  const login = () => {
    utils.googleLogIn();
  };

  const logout = () => {
    utils.googleLogOut();
  };

  utils.googleGetDirectories();

  // ----- there's gotta be a cleaner way to do all
  //       this?
  let dynWidths = [];
  let loggedOn = false;

  if (utils.isGoogleOn()) {
    dynWidths = ["84%", "14%"];
    loggedOn = true;
    utils.googleGetDirectories();
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
