import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";
import axios from "axios";

const HomeBar = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts.");
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#004d40" }}>
        Blog Posts
      </Typography>

      {/* Loading Indicator */}
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: 100 }}>
          <CircularProgress color="success" />
        </Box>
      )}

      {/* Error Message */}
      {error && <Alert severity="error">{error}</Alert>}

      {/* Blog Posts in Cards */}
      {!loading && !error && (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card component={Paper} elevation={3} sx={{ p: 2, backgroundColor: "#e8f5e9", borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#004d40" }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#616161" }}>
                    ID: {post.id}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomeBar;




