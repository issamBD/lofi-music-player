import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  firstPlay,
  songs,
  setCurrentSong,
  setFirstPlay,
}) => {
  //useRef
  const audioRef = useRef(null);
  //States
  const [playButton, setPlayButton] = useState(faPlay);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
  });

  const avoidAutoPlay = (cond) => {
    if (!cond) {
      audioRef.current.play();
      setIsPlaying(true);
      setPlayButton(faPause);
    }
  };
  useEffect(() => {
    avoidAutoPlay(firstPlay);
  }, [currentSong, firstPlay]);

  //events handlers
  const TimeChangeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    if (!duration) {
      setSongInfo({ current: current, duration: 0 });
    } else if (e.target.currentTime === duration) {
      setSongInfo({ current: 0, duration: duration });
      audioRef.current.play();
    } else {
      setSongInfo({ current: current, duration: duration });
    }
  };

  const audioClickHandler = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
      setPlayButton(faPause);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
      setPlayButton(faPlay);
    }
  };
  const audioInputHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, current: e.target.value });
  };

  //js functions
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const skipHamdler = (direction) => {
    setFirstPlay(false);
    audioRef.current.pause();
    let ind = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "back") {
      if (ind === 0) setCurrentSong(songs[songs.length - 1]);
      else {
        setCurrentSong(songs[ind - 1]);
      }
    } else if (direction === "forward") {
      setCurrentSong(songs[(ind + 1) % songs.length]);
    }
  };

  //rendered component
  return (
    <PlayerContainer>
      <div className="time-control">
        <p>{formatTime(songInfo.current)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.current}
          onChange={audioInputHandler}
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="left"
          size="2x"
          icon={faAngleLeft}
          onClick={() => {
            skipHamdler("back");
          }}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={playButton}
          onClick={audioClickHandler}
        />
        <FontAwesomeIcon
          className="right"
          size="2x"
          icon={faAngleRight}
          onClick={() => {
            skipHamdler("forward");
          }}
        />
      </div>
      <audio
        onTimeUpdate={TimeChangeHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </PlayerContainer>
  );
};

export default Player;

const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .time-control {
    width: 50%;
    display: flex;
    @media only screen and (max-width: 900px) {
      width: 80%;
    }
  }
  input {
    width: 100%;
    margin: 1em 1em;
  }
  p {
    margin-top: 10px;
    padding: 2px;
  }

  .play-control {
    width: 30%;
    display: flex;
    justify-content: space-between;
    svg {
      cursor: pointer;
    }
  }
`;
