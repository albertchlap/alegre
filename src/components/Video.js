import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const VideoWrapper = styled.div`
  height: 100%;
  width: 100%;

  overflow: hidden;

  -webkit-transform: translateZ(0);
  /* box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07); */
`;

const Video = () => {
  return (
    <VideoWrapper>
      <video
        style={{
          height: "inherit",
          width: "inherit",
          objectFit: "cover",
        }}
        muted
        loop
        autoPlay>
        <source
          src='https://res.cloudinary.com/dghcus14g/video/upload/v1618600742/cheers_7384aa8761.mp4'
          type='video/mp4'
        />
      </video>
    </VideoWrapper>
  );
};

export default Video;
