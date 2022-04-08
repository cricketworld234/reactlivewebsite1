import React, { useEffect, useState } from "react";
import axios from "axios";
const ComA = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);
      setMoves(res.data.moves.length);
      setName(res.data.name);
    }
    getData();
  });
  return (
    <>
      <h1>
        You choose <span style={{ color: "red" }}>{num}</span> value
      </h1>
      <h1>
        My Name <span style={{ color: "red" }}>{name} </span>
      </h1>
      <h1>
        You moves <span style={{ color: "red" }}>{moves}</span> moves
      </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="4">4</option>
      </select>
    </>
  );
};
export default ComA;
