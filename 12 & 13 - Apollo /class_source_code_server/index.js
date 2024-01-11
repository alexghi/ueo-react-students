const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios").default;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID
    title: String
    author: String
    price: Int
  }

  type Library {
    id: ID
    books: [Book]
  }

  type Jobs {
    id: ID
    title: String
    description: String
    company: String
    location: String
    url: String
  }

  type Movies {
    id: ID
    title: String
    description: String
    url: String
    price: Int
  }

  type SpacePictures {
    copyright: String
    url: String
    title: String
    explanation: String
    date: String
  }

  type BookAndImage {
    id: ID
    book: Book
    image: SpacePictures
  }

  type SingularNews {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    jobs: [Jobs]
    movies: [Movies]
    booksAndImages: [BookAndImage]
    space_pictures: [SpacePictures]
    news: [SingularNews]
  }
`;

const allBooks = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
    price: 20,
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
    price: 10,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 40,
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    price: 23,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    price: 35,
  },
];

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned",
    url: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    price: 10,
  },
  {
    id: 2,
    title: "The Godfather",
    description: "The aging patriarch",
    url: "https://www.youtube.com/watch?v=sY1S34973zA",
    price: 20,
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    description: "The early life and career of",
    url: "https://www.youtube.com/watch?v=20-ZWzXkcMk",
    price: 30,
  },
  {
    id: 4,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past",
    url: "https://www.youtube.com/watch?v=EXeTw3wC0y8",
    price: 30,
  },
];

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Full Stack Developer",
    company: "Google",
    location: "Mountain View, CA",
    url: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Software Engineer",
    description: "Full Stack Developer",
    company: "Facebook",
    location: "Menlo Park, CA",
  },
  {
    id: 3,
    title: "HR",
    description: "HR",
    company: "Apple",
    location: "Cupertino, CA",
  },
];

const resolvers = {
  Query: {
    news: (topic) => {
      return axios.get(`api.news${topic}`);
    },
    books: () => allBooks,
    movies: () => {
      return movies.findAll();
    },
    booksAndImages: async () => {
      // const images = await axios.get('https://unsplash');
      let POD = null;

      await axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=AaMpAKQyQTDmPP3yC1RoArvqG2MjgukNtir4D8Y6"
        )
        .then((res) => {
          POD = res.data;
        });
      return [
        {
          id: 1,
          book: {
            id: 1,
            author: "Keller",
            title: "Reason for God",
          },
          image: POD,
        },
        {
          id: 2,
          book: {
            id: 1,
            author: "Watchman",
            title: "HSP",
          },
          image: POD,
        },
      ];
    },
    jobs: () => jobs,
    space_pictures: () => {
      // your API KEY goes here
      return axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=AaMpAKQyQTDmPP3yC1RoArvqG2MjgukNtir4D8Y6&start_date=2023-03-18"
        )
        .then(
          (res) => res.data
          // {
          //     return res.data.map((image) => {
          //       return {
          //         ...image,
          //         author: image.copyright,
          //         name: image.title,
          //       };
          //     });
          //   }
        );
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
