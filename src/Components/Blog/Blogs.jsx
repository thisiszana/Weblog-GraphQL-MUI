import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../GraphQL/queries";
import { Container, Grid, Typography } from "@mui/material";

import CardEL from "../Shared/CardEL";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEL post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
