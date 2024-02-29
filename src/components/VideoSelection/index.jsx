// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { Box, Typography, Container, Card, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// const Videos = () => {
//   const [videos, setVideos] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     // Fetch initial videos
//     fetchVideos(page);
//   }, []);

//   const fetchVideos = async (page) => {
//     try {
//       const response = await fetch(
//         `https://api.example.com/videos?page=${page}`
//       );
//       const data = await response.json();
//       const fetchedVideos = data.videos; // Assuming the API returns an array of videos
//       setVideos((prevVideos) => [...prevVideos, ...fetchedVideos]);
//       setHasMore(data.hasMore);
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   const loadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//     fetchVideos(page + 1);
//   };

//   return (
//     <Container>
//       <InfiniteScroll
//         dataLength={videos.length}
//         next={loadMore}
//         hasMore={hasMore}
//         loader={<Typography>Loading...</Typography>}
//         endMessage={<Typography>No more videos</Typography>}
//       >
//         {videos.map((video) => (
//           <Card key={video.id} sx={{ marginBottom: "20px" }}>
//             <CardContent>
//               <Typography variant="h5">{video.title}</Typography>
//               <Typography variant="body1">{video.description}</Typography>
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "200px",
//                   backgroundColor: "#eeeeee",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   position: "relative",
//                 }}
//               >
//                 {/* Placeholder text */}
//                 <Typography>Video Placeholder</Typography>
//                 <Link to={`/playback/${video.id}`}>
//                   <PlayCircleOutlineIcon
//                     className="play-icon"
//                     style={{
//                       position: "absolute",
//                       top: "50%",
//                       left: "50%",
//                       transform: "translate(-50%, -50%)",
//                       fontSize: "48px",
//                       opacity: 0,
//                       cursor: "pointer",
//                     }}
//                   />
//                 </Link>
//               </Box>
//             </CardContent>
//           </Card>
//         ))}
//       </InfiniteScroll>
//     </Container>
//   );
// };

// export default Videos;
