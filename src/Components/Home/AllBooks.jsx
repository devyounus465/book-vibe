import useDataLoad from "../../useDataLoad";
import BookCard from "./BookCard";

const AllBooks = () => {
  const books = useDataLoad();

  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-3xl text-center font-semibold text-white">Books</h2>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mt-12">
          {books.map((book, i) => (
            <BookCard book={book} key={i}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
