import ReactDOM from "react-dom";
import Module from "./Module";

const App = () => {
  return (
    <div>
      <header>Starter Project</header>
      <Module arg1="moduel1.arg1" arg2="module1.arg2" />
      <Module arg1="moduel2.arg1" arg2="module2.arg2" />
      <Module arg1="moduel3.arg1" arg2="module3.arg2" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
