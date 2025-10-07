import React, { use } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ book }) => {
  // const data = use(bookPromise)
  // console.log(data)
  const {
    image,
    bookName,
    author,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    bookId
  } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border mt-4">
        <figure className="bg-gray-100 w-2/3 mx-auto p-5 mt-2 rounded-[15px]">
          <img className="h-[200px] w-[150px]  " src={image} alt="books" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag) => (
              <button className="btn" >{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>{publisher} </p>
          <div className="border-t border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
