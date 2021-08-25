// import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "./BEST COMIC TITLE.png";
import { IoMdRefreshCircle } from "react-icons/io";
import Stars from "./components/Stars";
import { match } from "minimatch";

function App() {
  const [comic, setComic] = useState();
  const [random, setRandom] = useState();
  const [value, setValue] = useState(0);

  const page = () => setRandom(Math.round(Math.random() * 600));

  const proxy = "https://cors-anywhere.herokuapp.com";

  if (!random) {
    page();
  }

  useEffect(() => {
    random &&
      fetch(`${proxy}/xkcd.com/${random}/info.0.json`, {
        headers: {
          "X-Requested-With": "wololo",
        },
      })
        .then((res) => res.json())
        .then((res) => setComic(res))
        .catch((err) => console.log(err));
  }, [random]);

  console.log(random);
  console.log(comic);

  return (
    <div className="app">
      <img className="logo" src={img} alt="best comic title" />
      <nav className="nav">
        <p>Comic Vol.1</p>
      </nav>
      <main>
        <div className="container_1">
          <button
            onClick={() => {
              page();
              setValue(0);
            }}
            className="button_refresh"
          >
            <IoMdRefreshCircle className="spin" />
          </button>
          <img
            className="image_comic"
            src={comic ? comic.img : ""}
            alt={comic ? comic.alt : ""}
          />
        </div>
        <div className="container_2">
          <div className="container_2-div">
            <p>{comic ? comic.title : "Title"}</p>
            <p>{comic ? comic.year : "Year"}</p>
            <div className="starts">
              <Stars value={value} setValue={setValue} />
            </div>
          </div>
        </div>
      </main>
      <footer className="nav footer">
        <p>Rate your comic!</p>
      </footer>
    </div>
  );
}

export default App;
