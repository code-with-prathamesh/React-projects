export const SeriesCard = (props) => {
  return (
    <li>
      <div>
        <img
          src={props.currElem.img_url}
          alt={props.currElem.name}
          width="50%"
          height="50%"
        />
      </div>
      <h1>Name: {props.currElem.name}</h1>
      {/* 2. Expressions
          JSX allows you to write javascript expressins inside curly braces. This includes operations, function calls, and other Javascript expessions that produce a value. */}
      <h3>Ratings: {props.currElem.rating}</h3>
      <p>Summary: {props.currElem.description}</p>
      <p>Genre: {props.currElem.genre}</p>
      <p>Cast: {props.currElem.cast}</p>
      <a href={props.currElem.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
