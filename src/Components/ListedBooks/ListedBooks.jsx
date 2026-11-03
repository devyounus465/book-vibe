import { useContext, useMemo, useState } from "react";
import { BookContext } from "../BookDetails/Context/BookProvider";
import BookListCard from "./BookListCard";

const ListedBooks = () => {
  const { readBooks, wishListBooks } = useContext(BookContext);

  const [activeTab, setActivetab] = useState("read");

  const [sortBy, setSortBy] = useState("default");

  // get activeTab books data
  const displayBooks = activeTab === "read" ? readBooks : wishListBooks;

  // sorting functionality
  const sortBooks = useMemo(() => {
    const books = [...displayBooks];

    switch (sortBy) {
      case "rating":
        return books.sort((a, b) => a.rating - b.rating);
      case "pages":
        return books.sort((a, b) => a.totalPages - b.totalPages);
      case "year":
        return books.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      default:
        return books;
    }
  }, [displayBooks, sortBy]);

  return (
    <div className="mt-12">
      <div className="container">
        <h3 className="text-3xl font-bold p-8 bg-slate-200 text-black text-center rounded-2xl">
          Books
        </h3>
        {/*  sorting */}
        {/* Sorting Dropdown */}
        <div className="flex justify-center mt-6">
          <select
            className="select select-bordered w-52"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="rating">Rating</option>
            <option value="pages">Number of Pages</option>
            <option value="year">Publishing Year</option>
          </select>
        </div>
        {/* // display books */}
        <div className="mt-8">
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-lift">
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Listed Read Books"
              checked={activeTab === "read"}
              onChange={() => setActivetab("read")}
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <div className=" grid grid-cols-1 gap-6">
                {activeTab === "read" &&
                  sortBooks?.map((book) => (
                    <BookListCard book={book}></BookListCard>
                  ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Wishlis Books"
              checked={activeTab === "wishlist"}
              onChange={() => setActivetab("wishlist")}
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              {wishListBooks.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
