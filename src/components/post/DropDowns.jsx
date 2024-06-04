import React from "react";
import { Link } from 'react-router-dom';
const DropdownMenu = ({ title, choices, onChange }) => (
  <div className="dropdown" style={{ margin: "0px", width: "100%" }}>
    <button
      className="btn btn-secondary dropdown-toggle "
      style={{ display: "block", width: "100%" }}
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {title}
    </button>
    <ul className="dropdown-menu w-100" onClick={onChange}>
      {choices.map((choice, index) => (
        <li key={index}>
          <Link className="dropdown-item " to="#" data-value={choice.value}>
            {choice.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default DropdownMenu;
