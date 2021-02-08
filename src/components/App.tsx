import React, { useEffect, useState } from "react";
import axios from "axios";

const API_TOKEN = "211e3ba5-273a-489c-a376-691c68db7527";
const ENDPOINT = "https://devcamp.com/api/metrics/code_editor_grouped_by_day";

const App = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(ENDPOINT, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      })
      .then((response: any) => {
        console.log("DATA", response.data);
      })
      .catch((error) => {
        console.log("ERROR GETTING DATA", error);
      });
  };
  return <div>Coming soon...</div>;
};

export default App;
