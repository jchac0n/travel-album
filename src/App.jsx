import ReactDOM from "react-dom";
import Header from "./Header";
import Profiles from "./Profiles";
import Map from "./Map";

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Profiles />
        <Map />
      </div>
    </div>
  );
};

/*
const App = () => {

  return (
    <div>
      <div className="main-grid">
        <div className="account-container">
          <GoogleInfo />
        </div>
        <div className="map-container">
          {!isLoaded ? (
            <div>Map Loading...</div>
          ) : (
            <div>
              <Map />
            </div>
          )}
        </div>
        <div className="photo-container">
          <Album />
        </div>
      </div>
    </div>
  );
};
*/

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
