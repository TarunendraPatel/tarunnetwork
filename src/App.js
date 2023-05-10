import "./App.css";
import Auth from "./components/pages/auth/auth";
import Home from "./components/pages/home";
import Profile from "./components/pages/profile/profile";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Home />
      {/*  <Profile />
      <Auth />  */}
    </div>
  );
}

export default App;
