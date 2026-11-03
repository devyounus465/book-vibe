import { Link } from "react-router";

const BookListCard = ({ book }) => {
  const {
    bookId,
    bookName,
    image,
    review,
    author,
    rating,
    category,
    publisher,
    totalPages,
  } = book;

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 border rounded border-amber-100 p-4">
        <div className="w-full md:w-1/6">
          <img className="h-[200px] p-6 bg-slate-200" src={image} alt="" />
        </div>
        <div className=" w-full md:w-5/6 space-y-3">
          <h2 className="text-2xl font-semibold text-white">{bookName}</h2>
          <p className="text-xl"> By: {author}</p>
          <p className="text-xl"> {category}</p>
          <p className="text-xl"> Rating: {rating}</p>
          <p className="text-xl"> Rating: {totalPages}</p>
          <p className="text-xl">
            {" "}
            <span>Publisher:</span> {publisher}
          </p>
          <Link
            className="btn outline rounded outline-green-300 text-green-300"
            to={`/book-details/${bookId}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookListCard;
