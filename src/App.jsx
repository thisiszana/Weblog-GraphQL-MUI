import { Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import HomePage from "./Components/Home/HomePage";
import BlogPage from "./Pages/BlogPage";
import AuthorPage from "./Pages/AuthorPage";
import ScrollToTop from "./Components/Shared/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
