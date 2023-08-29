import React from "react";

const Pagination = ({ userPerPage, totalUser, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUser / userPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex rounded-md mt-3 justify-center items-center mb-4">
      <ul className="flex text-white  ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="p-1 border border-gray-500 round bg-blue-500"
          >
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
