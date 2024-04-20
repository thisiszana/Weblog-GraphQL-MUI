import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../GraphQL/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";

import CardEL from "../Components/Shared/CardEL";
import Loader from "../Components/Shared/Loader";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  const {
    author: { name, field, avatar, description, posts1 },
  } = data;

  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography
            component="h3"
            variant="h5"
            fontWeight={700}
            mt={4}
            color="text.primary"
          >
            {name}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            color="text.secondary"
            mt={2}
            mb={4}
          >
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{ textAlign: "justify", color: "#000" }}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {posts1.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
