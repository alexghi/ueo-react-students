import { useApolloClient, useQuery, useMutation } from "@apollo/client";
import BOOKS from "./data/queries/books";
import { useCallback, useRef, useState } from "react";
import { isModalOpen } from "./data/myReactiveVars";
import { useReactiveVar } from "@apollo/client";

const BooksOverview = () => {
  const { loading, error, data } = useQuery(BOOKS, {
    fetchPolicy: `network-only`,
  });

  const apolloClient = useApolloClient();

  console.log("apolloClient", apolloClient);

  if (loading) {
    return <div> loading your books </div>;
  }

  if (error) {
    return <div> oops, there has been an error </div>;
  }

  return (
    <>
      {data?.books?.map(({ title, author, id }) => {
        return (
          <div key={id}>
            {title} - {author}
          </div>
        );
      })}
    </>
  );
};

export default BooksOverview;
