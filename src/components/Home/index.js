import React, { useEffect, useState } from "react";
import "./index.css";

let pageNumber = 1;

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(pageNumber);

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    );
    const results = await response.json();

    setData((prev) => {
      return [...prev, ...results];
    });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <ul className="items-container">
      {data.map((each, index) => (
        <li className="post-item" key={index}>
          <div className="card-container">
            <div className="image-container">
              <img
                alt="itemImage"
                className="item-image"
                src={each.thumbnailUrl}
              />
            </div>
            <div className="item-details-container">
              <h1 className="item-name">{each.title}</h1>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
