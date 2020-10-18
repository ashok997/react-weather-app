import React from "react";

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
const API_URL = "https://api/openweahermap.org/data/2.5";

function App() {
  const dateParser = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Devember",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search...." />
        </div>
        <div className="location-box">
          <div className="location">San Antonio, US</div>
          <div className="date">{dateParser(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15°</div>
          <div className="weather">Sunny</div>
        </div>
        /*
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@francesco_ungaro?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Francesco Ungaro
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/mountain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </main>
    </div>
  );
}

export default App;
