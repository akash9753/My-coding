import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/videos/random");
        setVideos(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(`fetchVideos api error`, err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video) => {
        return (
          <div key={video._id}>
            <Card />
          </div>
        );
      })}
    </Container>
  );
};

export default Home;
