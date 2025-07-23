// Destructuring the props"data"

export const SeriesCard = ({ data }) => {
  const { name, cast, genre, description, img_url, watch_url, rating } = data;

  return (
    <li>
      <div>
        <img src={img_url} alt={name} width="50%" height="50%" />
      </div>
      <h1>Name: {name}</h1>
      <h3>Ratings: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
