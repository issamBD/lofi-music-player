import uuid from "react-uuid";

function chillhop() {
  const baseURL = "http://www.fesliyanstudios.com/";
  return [
    {
      name: "Maple Leaf",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
      id: uuid(),
    },
    {
      name: "Chill Gaming",
      cover:
        "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      artist: "fesliyanstudios",
      audio: `${baseURL}musicfiles/2019-06-07_-_Chill_Gaming_-_David_Fesliyan.mp3`,
      id: uuid(),
    },
    {
      name: "Tropical Keys",
      cover:
        "https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      artist: "David Renda",
      audio: `${baseURL}musicfiles/2020-09-14_-_Tropical_Keys_-_www.FesliyanStudios.com_David_Renda/2020-09-14_-_Tropical_Keys_-_www.FesliyanStudios.com_David_Renda.mp3`,
      id: uuid(),
    },
    {
      name: "I Got This",
      cover:
        "https://images.unsplash.com/photo-1590642916589-592bca10dfbf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bG8lMjBmaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      artist: "fesliyanstudios",
      audio: `${baseURL}musicfiles/2019-06-12_-_I_Got_This_-_www.fesliyanstudios.com_-_David_Renda.mp3`,
      id: uuid(),
    },

    {
      name: "Reaching Out",
      cover:
        "https://images.unsplash.com/photo-1584385002340-d886f3a0f097?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      artist: "By David Renda",
      audio: `${baseURL}musicfiles/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda.mp3`,
      id: uuid(),
    },
    {
      name: "Homework",
      cover:
        "https://images.unsplash.com/photo-1520563683082-7ef74b616a89?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
      artist: "fesliyanstudios",
      audio: `${baseURL}musicfiles/2019-06-12_-_Homework_-_David_Fesliyan.mp3`,
      id: uuid(),
    },
    {
      name: "Time Alone",
      cover:
        "https://images.unsplash.com/photo-1544852392-70b531dd7c12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
      artist: "David Renda",
      audio: `${baseURL}musicfiles/2020-11-17_-_Time_Alone_-_www.FesliyanStudios.com_David_Renda/2020-11-17_-_Time_Alone_-_www.FesliyanStudios.com_David_Renda.mp3`,
      id: uuid(),
    },
  ];
}

export default chillhop;
