import { useEffect } from "react";

export const SearchPage = ({ params }) => {
  useEffect(() => {
    document.title = `Has buscado (${params.query})`;
  }, [params]);

  return <h1>Has buscado ({params.query})</h1>;
};
