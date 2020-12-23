import React, { useState } from "react";
import styled from "styled-components";

const LibrarySong = ({ song, setCurrentSong, setFirstPlay, isPlaying }) => {
  const songHandler = () => {
    setCurrentSong(song);
    setFirstPlay(false);
  };

  return (
    <Container isPlaying={isPlaying} onClick={songHandler}>
      <img src={song.cover} alt=""></img>
      <div className="song-desc">
        <h2>{song.name}</h2>
        <h4>{song.artist}</h4>
      </div>
    </Container>
  );
};

export default LibrarySong;

const Container = styled.div`
  background-color: ${(props) => (props.isPlaying ? "lightblue" : "white")};
  display: flex;
  align-items: center;
  padding: 20px 20px;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  h2 {
    font-size: 16px;
    padding: 5px 0;
  }

  h4 {
    font-size: 12px;
  }

  .song-desc {
    padding: 10px;
  }

  &:hover {
    background-color: lightblue;
  }
`;
