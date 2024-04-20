import React from "react";
import { useQuery } from "@apollo/client";

import { Avatar, Divider, Grid, Typography } from "@mui/material";

import { GET_AUTHORS_INFO } from "../../GraphQL/queries";
import { Link } from "react-router-dom";

import Loader from "../Shared/Loader";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  return (
    <Grid
      container
      backgroundColor="#fff"
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
