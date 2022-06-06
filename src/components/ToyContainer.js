import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  const getAllToys = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy}/>
  })

  return (
    <div id="toy-collection">
      {getAllToys}
    </div>
  );
}

export default ToyContainer;
