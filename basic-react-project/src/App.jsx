// Each JSX expression must have one parent element, which means if you try to return multiple elements, React will throw an error.

//Every JSX tag needs to be closed. You can use self-closing tags for elements that don't have children, e.g., <img src="url" />

const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img
          src="stranger_things.jpg"
          alt="stranger_things.jpg"
          width="50%"
          height="50%"
        />
      </div>
      <h1>Name: Stranger Things</h1>
      <h3>Ratings: 8.9</h3>
      <p>
        Summary: In 1980s Indiana, a group of young friends witness supernatural
        forces and secret government exploits. As they search for answers, the
        children unravel a series of extraordinary mysteries.
      </p>
    </div>
  );
};

export default App;
