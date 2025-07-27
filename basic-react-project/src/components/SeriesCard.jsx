import styles from "./Netflix.module.css";

// Destructuring the props"data"
export const SeriesCard = ({ data }) => {
  const { name, cast, genre, description, img_url, watch_url, rating } = data;
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  //Adding In-Line CSS
  const button_style = {
    padding: "1.2rem 2.6rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--font-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="50%" height="50%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name: {name}</h2>
        <h3>
          Ratings:{" "}
          <span className={` ${styles.rating} ${ratingClass}`}>{rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={button_style}>Watch Now</button>{" "}
        </a>
      </div>
    </li>
  );
};
