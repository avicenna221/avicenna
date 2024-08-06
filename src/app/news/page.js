"use client";
import React, { useEffect, useState } from "react";
import NewsFilter from "../components/news/NewsFilter";
import NewsList from "../components/news/NewsList";
import NewsHeroSection from "../components/news/NewsHeroSection";
import Skeleton from "@mui/material/Skeleton";
import {
  CssBaseline,
  Container,
  ThemeProvider,
  createTheme,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { getRequest } from "../RequestsAPI/RequestsApi";

const theme = createTheme({
  palette: {
    primary: {
      main: "#001e60",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [selectedTag, setSelectedTag] = useState("All Tags");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await getRequest("/api/blogs");
    console.log("avc",data)
    if (data.status == 200) {
      setData(data.data.Data);
      const mdata= JSON.stringify(data.data.Data);
      localStorage.setItem("news", mdata)
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const filteredNews = data.filter((news) => {
    return (
      (selectedTag === "All Tags" || news.blogCategory.includes(selectedTag)) &&
      (searchQuery === "" ||
        news.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewsHeroSection />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {loading == false ? (
              <NewsList
                searchQuery={searchQuery}
                selectedTopic={selectedTopic}
                selectedTag={selectedTag}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                data={data}
                loading={loading}
              />
            ) : (
              <Box sx={{ mt: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Skeleton variant="rounded" width="30%" height={60} />
                  <Skeleton variant="rounded" width="70%" height={60} />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}
                >
                  <Skeleton variant="rounded" width="30%" height={60} />
                  <Skeleton variant="rounded" width="70%" height={60} />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}
                >
                  <Skeleton variant="rounded" width="30%" height={60} />
                  <Skeleton variant="rounded" width="70%" height={60} />
                </Box>
              </Box>
            )}

            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <Pagination
                count={Math.ceil(filteredNews.length / itemsPerPage)}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <NewsFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              data={data}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default NewsPage;
