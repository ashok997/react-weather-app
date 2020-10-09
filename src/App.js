import React from "react";

function App() {
  const dateParser = (d) => {
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    return `${day}${date}${month}${year}`;
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
      </main>
    </div>
  );
}

export default App;
