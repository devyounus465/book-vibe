import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getReadListFromLs,
  setReadListInLs,
} from "../../../Utils/LocalStorageDB";

export const BookContext = createContext(null);

const BookProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState(() => getReadListFromLs());
  const [wishListBooks, setWishListBooks] = useState([]);

  const addToReadBooks = (book) => {
    setReadListInLs(book);

    const alreadyBookExist = readBooks.some((b) => b.bookId === book.bookId);

    if (alreadyBookExist) {
      toast.warning("This book is already in your Read List!");
      return false;
    }

    setReadBooks((prevBooks) => [...prevBooks, book]);

    toast.success("Book added to Read List!");

    return true;
  };

  const addToWishListBook = (book) => {
    const alreadyBookExist = wishListBooks.some(
      (b) => b.bookId === book.bookId,
    );

    if (alreadyBookExist) {
      toast.warning("This book is already in your Wish List!");
      return false;
    }

    setWishListBooks((prevBooks) => [...prevBooks, book]);

    toast.success("Book added to Wish List!");

    return true;
  };

  const value = {
    readBooks,
    wishListBooks,
    addToReadBooks,
    addToWishListBook,
  };

  return (
    <BookContext.Provider value={value}>
      {children}

      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </BookContext.Provider>
  );
};

export default BookProvider;
