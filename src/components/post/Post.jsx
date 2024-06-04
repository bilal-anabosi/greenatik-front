import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
const viewButton = "additional-class";
const Post = ({
  city,
  requestType,
  quantity,
  date,

  image,
  deliveryMethod,
  postDetails,
  ownerUsername,
  id,
  provided,
}) => {
  const calculatedPercentage = (provided / quantity) * 100;

  return (
    <div className="col-12 col-sm-6 col-lg-4  col-xxl-3  mw-20 my-4">
      <div className={classes.postContainer}>
        <div className={classes.info}>
          <img
            src={image && image.secure_url ? image.secure_url : './favicon.ico'}
            className={classes.image}
            alt={image && image.secure_url ? "factory" : "Default Image"}
          />
          <h6>Factory: {ownerUsername}</h6>
        </div>
        <div className={classes.details}>
          <span>Requesting: {requestType}</span>
          <span>City: {city}</span>
          <span>Quantity: {quantity}</span>
          <span>Delivery Method: {deliveryMethod}</span>
          {requestType === "Others" && <span>Details: {postDetails}</span>}
          <div className="d-flex gap-2 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar "
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <span className="">{date}</span>
          </div>
        </div>
        <div className={`row ${classes.percentage}`}>
          <div className="col-9"></div>
          <div className={`col-3 d-flex justify-content-end`}>{calculatedPercentage}%</div>
        </div>
        <div
          className="progress my-4"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ height: "9px", backgroundColor: "#071e2a " }}
        >
          <div className="progress-bar" style={{ width: `${calculatedPercentage}%` }}></div>
        </div>
        <div className={classes.button}>
          <Link
            type="button"
            className={`btn btn-primary btn-sm px-4 rounded-4 py-1 `}
            to={`/singlepost/${id}`}
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
