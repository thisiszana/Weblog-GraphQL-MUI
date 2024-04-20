import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

import { GET_POST_INFO } from "../GraphQL/queries";
import Loader from "../Components/Shared/Loader";
import CommentForm from "../Components/Comment/CommentForm";
import Comments from "../Components/Comment/Comments";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            sx={{ color: "#000", cursor: "pointer", fontWeight: 700 }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 20 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author1.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700} sx={{color: "#000"}}>
              {data.post.author1.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author1.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
          style={{color: "#000"}}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
