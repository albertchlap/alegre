import React from "react";
import styled from "styled-components";

import Cheers from "../assets/videos/cheers.mp4";

const VideoWrapper = styled.div`
  height: 100%;
  width: 100%;

  overflow: hidden;

 

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
