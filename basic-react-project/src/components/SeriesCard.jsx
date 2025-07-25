// Destructuring the props"data"

export const SeriesCard = ({ data }) => {
  const { name, cast, genre, description, img_url, watch_url, rating } = data;

  //Adding In-Line CSS
  const button_style = {
    padding: "1.2rem 2.6rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "var(--btn-hover-bg-color)",
    color: "var(--bg-color)",
  };

  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} width="50%" height="50%" />
      </div>
      <div className="card-content">
        <h2>Name: {name}</h2>
        <h3>Ratings: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={button_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
