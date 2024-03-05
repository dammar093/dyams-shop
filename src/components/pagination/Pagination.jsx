import React from "react";
import "./Pagination.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="page">
        <MdKeyboardArrowLeft />
      </button>
      <button className="page-btn">1</button>
      <button className="page">
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
