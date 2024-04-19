import { gql, useQuery } from "@apollo/client";
import Header from "./Components/Layout/Header";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, data } = useQuery(QUERY);
  console.log(data);
  return (
    <>
      <h1>GraphQL</h1>
      <Header />
    </>
  );
}

export default App;
