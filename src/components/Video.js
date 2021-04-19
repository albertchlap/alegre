import React from "react";
import styled from "styled-components";

import Cheers from "../assets/videos/cheers.mp4";

const VideoWrapper = styled.div`
  height: 100%;
  width: 100%;

  overflow: hidden;

  /* -webkit-transform: translateZ(0); */
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
          zIndex: "50 !important",
        }}
        muted
        loop
        autoPlay>
        <source src={Cheers} type='video/mp4' />
      </video>
    </VideoWrapper>
  );
};

export default Video;
