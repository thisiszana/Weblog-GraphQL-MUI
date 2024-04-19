import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <AppBar poasition="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" sx={{ flexGrow: 1 }}>
            وبلاگ زد
          </Typography>
          <BookIcon/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
