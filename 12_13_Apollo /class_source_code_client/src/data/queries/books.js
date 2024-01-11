import { gql } from "@apollo/client";

const BOOKS = gql`
  query getMeAllTheBooks {
    books {
      id
      title
      author
    }
  }
`;

export default BOOKS;
