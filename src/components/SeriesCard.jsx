import React from "react";
import { CancelButton, SeriesImage } from "../shared/styled/commonStyle";

const SeriesCard = ({ listData }) => {
  const { id, name, rating, description, watch_url, img_url } = listData;

  function handelCancel(event) {
    console.log(event);
  }
  return (
    <li className={id}>
      <SeriesImage
        src={img_url}
        width="40%"
        height="30%"
        alt="Image"
        //className="my-1 my-image"
      />
      <h5>Name: {name}</h5>
      <p>Rating: {rating}</p>
      <p>{description}</p>
      <a href={watch_url} target="_blank">
        <button className="btn-sm btn btn-success">Watch Now</button>
      </a>
      <CancelButton onClick={handelCancel}>Cancel</CancelButton>
    </li>
  );
};

export default SeriesCard;
