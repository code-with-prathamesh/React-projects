// Each JSX expression must have one parent element, which means if you try to return multiple elements, React will throw an error.

//Every JSX tag needs to be closed. You can use self-closing tags for elements that don't have children, e.g., <img src="url" />

const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
  /*Setting values dynamically
   1. Variables
   You can embed any javascript variable within JSX by enclosing it in curly braces. The value of the variable wil be inserted into the DOM at the respective location.*/
  const name = "Stranger Things";
  const summary =
    "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.";
  /* 3. Funtion Calls 
  Functions especially those that return JSX, can be invoked directly within your JSX */
  const returnGenre = () => {
    const genre = "Sci-Fci";
    return genre;
  };

  return (
    <>
      <div>
        <img
          src="stranger_things.jpg"
          alt="stranger_things.jpg"
          width="50%"
          height="50%"
        />
      </div>
      <h1>Name: {name}</h1>
      {/* 2. Expressions
          JSX allows you to write javascript expressins inside curly braces. This includes operations, function calls, and other Javascript expessions that produce a value. */}
      <h3>Ratings: {5 + 3.9}</h3>
      <p>Summary: {summary}</p>

      <h4>Genre: {returnGenre()}</h4>
    </>
  );
};

export default App;
