import { NetflixSeries } from "./components/NetflixSeries";
import "./components/Netflix.css";

// import { Profile } from "./components/Profile";

const App = () => {
  // Each JSX expression must have one parent element, which means if you try to return multiple elements, React will throw an error.

  //Every JSX tag needs to be closed. You can use self-closing tags for elements that don't have children, e.g., <img src="url" />
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />
      {/* <Profile /> */}
    </section>
  );
};

export default App;
