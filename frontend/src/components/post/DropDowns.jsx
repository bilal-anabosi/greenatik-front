import React from "react";

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
          <a className="dropdown-item " href="#" data-value={choice.value}>
            {choice.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
export default DropdownMenu;
