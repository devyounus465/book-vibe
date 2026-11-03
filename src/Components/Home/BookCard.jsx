import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { bookId, bookName, image, review, author, rating, category } = book;

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="card bg-base-100 border border-white shadow-sm">
        <figure className="p-6 bg-">
          <img className="h-64 " src={image} alt={bookName} />
        </figure>
        <div className="card-body space-y-2">
          <div className="badge badge-secondary">{category}</div>
          <h2 className="card-title">{bookName}</h2>
          <p className="text-xl">By:{author}</p>
          <div className="card-actions  justify-between">
            <p>Fiction</p>
            <p className="text-right">{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
