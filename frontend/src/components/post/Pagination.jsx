import React, { useState } from "react";
import Post from "./Post";

const Pagination = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const formateDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  };
  const calculatePercentage = (provided, quantity) => {
    return (provided / quantity) * 100;
  };

  return (
    <div>
      <div className="row">
        {currentPosts.map((post, index) => (
          <Post
            key={index}
            id={post.id}
            image={post.ownerImage}
            city={post.city}
            requestType={post.requesting}
            quantity={post.quantity}
            date={formateDate(post.date)}
            deliveryMethod={post.pickUpDetails}
            postDetails={post.details}
            ownerUsername={post.ownerUsername}
            provided={post.provided}
          />
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination mt-5">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                paginate(currentPage - 1);
              }}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  paginate(i + 1);
                }}
              >
                {i + 1}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                paginate(currentPage + 1);
              }}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
