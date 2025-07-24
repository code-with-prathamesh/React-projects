import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    <>
      <ul className="grid grid-three-cols">
        {seriesData.map((currElem) => {
          return <SeriesCard key={currElem.id} data={currElem} />;
        })}
      </ul>
    </>
  );
};
