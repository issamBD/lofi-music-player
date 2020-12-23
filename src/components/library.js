import React from "react";
import styled from "styled-components";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  setFirstPlay,
  libraryStatues,
  setLibraryStatues,
}) => {
  return (
    <Container>
      <div className={`Library ${libraryStatues ? "active-library" : ""}`}>
        <FontAwesomeIcon
          className="mobileClose"
          size="2x"
          icon={faTimesCircle}
          onClick={() => {
            setLibraryStatues(false);
          }}
        />
        <div className="librarySongs">
          {songs.map((song) => (
            <LibrarySong
              song={song}
              setCurrentSong={setCurrentSong}
              setFirstPlay={setFirstPlay}
              key={song.id}
              isPlaying={song.id === currentSong.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Library;

const Container = styled.div`
  .mobileClose {
    display: none;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 2;
    cursor: pointer;
    @media only screen and (max-width: 900px) {
      display: block;
    }
  }
  .Library {
    display: none;
    .librarySongs {
      animation: in 0.5s ease forwards;
      position: absolute;
      top: 0;
      left: 0;
      width: 20%;
      height: 100vh;
      z-index: 1;
      overflow-y: scroll;
      transform: translateX(-100%);
      @media only screen and (max-width: 900px) {
        width: 100%;
      }
    }

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #ffffff;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: rgb(172, 172, 172);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .active-library {
    display: inline-block;
  }

  @keyframes in {
    to {
      transform: translateX(0);
    }
  }
`;
