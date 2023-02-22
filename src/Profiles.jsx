import GoogleProfile from "./GoogleProfile";
import IGProfile from "./IGProfile";
import LocalFiles from "./LocalFiles";

const Profiles = () => {
  return (
    <div className="profiles-container">
      <section id="profiles">
        <h1>
          <span className="fa-regular fa-circle-user" aria-hidden="true"></span>
          <span className="sr-only">Accounts</span>
        </h1>
        <GoogleProfile />
        <IGProfile />
        <LocalFiles />
      </section>
    </div>
  );
};

export default Profiles;
