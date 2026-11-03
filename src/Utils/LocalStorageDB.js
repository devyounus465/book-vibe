const getReadListFromLs = () => {
  const allBooksInLs = localStorage.getItem("readList");

  if (allBooksInLs) return JSON.parse(allBooksInLs);

  return [];
};

const setReadListInLs = (book) => {
  const allBooks = getReadListFromLs();

  const alreadyExist = allBooks?.find((bk) => bk.bookId === book.bookId);

  if (!alreadyExist) {
    allBooks.push(book);
    const stringyFyData = JSON.stringify(allBooks);
    localStorage.setItem("readList", stringyFyData);
  }
};

export { getReadListFromLs, setReadListInLs };
