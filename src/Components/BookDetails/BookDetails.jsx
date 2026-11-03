import { useParams } from "react-router";
import useDataLoad from "../../useDataLoad";
import { useContext } from "react";
import { BookContext } from "./Context/BookProvider";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { addToReadBooks, addToWishListBook } = useContext(BookContext);

  const params = useParams();
  const books = useDataLoad();

  const book = books.find((book) => book.bookId == params.bookId);
  const {
    bookId,
    bookName,
    image,
    review,
    author,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = (book) => {
    addToReadBooks(book);
  };

  const handleWishList = (book) => {
    addToWishListBook(book);
  };
  return (
    <div className="my-12">
      <div className="container flex flex-col md:flex-row gap-8 justify-between">
        <div className="w-full md:w-1/2 ">
          <figure className="rounded-2xl bg-amber-50 p-12">
            <img className="rounded-2xl" src={image} alt="" />
          </figure>
        </div>
        <div className="w-full md:w-1/2  space-y-6">
          <h2 className="text-4xl font-bold text-white">{bookName}</h2>
          <p className="text-xl"> By: {author}</p>
          <div className="border-t border-amber-50"></div>
          <p className="text-xl"> {category}</p>
          <div className="border-t border-amber-50"></div>
          <p className="text-xl font-semibold"> Reviews</p>
          <p className="text-lg"> {review}</p>
          <p className="text-xl"> Tags: {tags}</p>
          <div className="border-t border-amber-50"></div>
          <div className="space-y-2">
            <div className="text-xl flex justify-between">
              {" "}
              <span>Publisher:</span> {publisher}
            </div>
            <div className="text-xl flex justify-between">
              {" "}
              <span>Rating:</span> {rating}
            </div>
            <div className="text-xl flex justify-between">
              {" "}
              <span>Publish Year:</span> {yearOfPublishing}
            </div>

            <div className="flex gap-4 mt-12">
              <button
                onClick={() => handleRead(book)}
                className="px-6 py-2 outline outline-green-400  text-green-400"
              >
                Read
              </button>
              <button
                onClick={() => handleWishList(book)}
                className="px-6 py-2  bg-green-400  text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
