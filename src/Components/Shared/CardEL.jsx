import {
  CardActionArea,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEL({ post }) {
  const { author1, title, slug, coverPhoto } = post;

  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      <CardActionArea>
        <CardHeader
          avatar={<Avatar src={author1.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography
              variant="p"
              component="p"
              color="text.primary"
              fontSize={18}
              fontWeight={700}
            >
              {author1.name}
            </Typography>
          }
        />
        <CardMedia
          component="img"
          image={coverPhoto.url}
          height={194}
          alt={slug}
        />
        <CardContent>
          <Typography component="h3" color="text.primary" fontWeight="700">
            {title}
          </Typography>
        </CardContent>
        <Divider variant="middle" sx={{ margin: 2 }} />
        <CardActions>
          {/* <Link to={`/blog/${slug}`} style={{ textDecoration: "none", width="100%" }}> */}
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            sx={{
              width: "100%",
              borderRadius: 3,
              fontWeight: "700",
              marginBottom: 1,
            }}
          >
            مشاهده مطلب
          </Button>
          {/* </Link> */}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default CardEL;
