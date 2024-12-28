
import seriesList from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
import {DivContainer, HeaderStyle} from "../shared/styled/commonStyle.jsx";
const NetflixSeries = () => {


  return (
    <>
      <HeaderStyle>Netflix Series</HeaderStyle>
      <DivContainer>
        <ul className="list-inline">
          {seriesList.map((data) => {
            return <SeriesCard listData={data} key={data.id} />;
          })}
        </ul>
      </DivContainer>
    </>
  );
};

export default NetflixSeries;
