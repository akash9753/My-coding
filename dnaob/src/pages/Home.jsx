import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/videos/${type}`);
        setVideos(res.data);
        console.log(res.data);
        
      } catch (err) {
        console.error(`fetchVideos api error`, err);
      }
    };
    fetchVideos();
  }, [type]);
  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const res = await axios.get(`/videos/${type}`);
  //     setVideos(res.data);
  //   };
  //   fetchVideos();
  // }, [type]);

  return (
    <Container>
      {videos.map((video) => {
        return (
          <div key={video._id}>
            <Card key={video._id} video={video} />
          </div>
        );
      })}
    </Container>
  );
};

export default Home;
