import { createBrowserRouter } from "react-router";
import Layout from "../Root/Layout";
import Home from "../Components/Home/Home";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import BookDetails from "../Components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/listed-books", Component: ListedBooks },
      { path: "/book-details/:bookId", Component: BookDetails },
    ],
  },
]);

export default router;
