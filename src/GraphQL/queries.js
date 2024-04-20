import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author1 {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      description {
        html
      }
      field
      name
      posts1 {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
