import React, { useState, useEffect } from "react";
// import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchApi } from "./fetchApi";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    fetchApi().then((res) =>
      setColorList(
        res.map((color) => {
          if (color.id === res.id) {
            return res;
          } else {
            return color;
          }
        })
      )
    );
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
