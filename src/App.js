import React, { useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./util";
import Library from "./components/library";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  //states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [firstPlay, setFirstPlay] = useState(true);
  const [libraryStatues, setLibraryStatues] = useState(false);
  //rendering
  return (
    <div>
      <GlobalStyle />
      <Nav
        libraryStatues={libraryStatues}
        setLibraryStatues={setLibraryStatues}
      />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        firstPlay={firstPlay}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setFirstPlay={setFirstPlay}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setFirstPlay={setFirstPlay}
        libraryStatues={libraryStatues}
        setLibraryStatues={setLibraryStatues}
      />
    </div>
  );
}

export default App;
