import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
  return (
    <SongContainer>
      <img src={currentSong.cover} alt=""></img>
      <h2>{currentSong.name}</h2>
      <h4>{currentSong.artist}</h4>
    </SongContainer>
  );
};

export default Song;

const SongContainer = styled.div`
   min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    animation: spin 5s linear infinite;
  }
  h2 {
    padding: 1em 0 0.5em 0;
  }
}

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
