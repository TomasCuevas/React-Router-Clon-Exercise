import { useEffect } from "react";

const SearchPage = ({ params }) => {
  useEffect(() => {
    document.title = `Has buscado (${params.query})`;
  }, [params]);

  return <h1>Has buscado ({params.query})</h1>;
};

export default SearchPage;
