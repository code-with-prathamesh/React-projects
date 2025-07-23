import seriesData from "../api/seriesData.json";

export const NetflixSeries = () => {
  return (
    <>
      <ul>
        {seriesData.map((currElem) => {
          return (
            <li key={currElem.id}>
              <div>
                <img
                  src={currElem.img_url}
                  alt={currElem.name}
                  width="50%"
                  height="50%"
                />
              </div>
              <h1>Name: {currElem.name}</h1>
              {/* 2. Expressions
          JSX allows you to write javascript expressins inside curly braces. This includes operations, function calls, and other Javascript expessions that produce a value. */}
              <h3>Ratings: {currElem.rating}</h3>
              <p>Summary: {currElem.description}</p>
              <p>Genre: {currElem.genre}</p>
              <p>Cast: {currElem.cast}</p>
              <a href={currElem.watch_url} target="_blank">
                <button>Watch Now</button>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
