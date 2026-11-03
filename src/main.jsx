import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./router/router";
import BookProvider from "./Components/BookDetails/Context/BookProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  </StrictMode>,
);
