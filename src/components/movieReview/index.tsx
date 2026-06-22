import React from "react";
import { Review } from "../../types/interfaces";
import MovieReviewPage from "./pages/movieReviewPage";


const MovieReview: React.FC<Review> =  (props) => {
  return (
    <>
      <p>Review By: {props.author} </p>
      <p>{props.content} </p>
    </>
  );
};
export default MovieReview
