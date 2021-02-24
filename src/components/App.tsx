import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityChart from "./ActivityChart";

const API_TOKEN = "211e3ba5-273a-489c-a376-691c68db7527";
const NAME = "Jordan Hudgens";
const ENDPOINT = "https://devcamp.com/api/metrics/code_editor_grouped_by_day";

interface IActivityElement {
  duration: number;
  date: string;
}

const App = () => {
  const [series, setSeries] = useState(null);
  const [dates, setDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      .then((response: { data: IActivityElement[] }) => {
        if (response?.data) {
          const durations = response.data.map((stat: IActivityElement) =>
            stat.duration && stat.duration > 0
              ? (stat.duration / 3600).toFixed(2)
              : 0
          );
          setSeries([
            { name: "Coding activity", type: "area", data: durations },
          ]);
          setDates(response.data.map((stat: IActivityElement) => stat.date));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR GETTING DATA", error);
      });
  };

  const content = isLoading ? (
    <div>Loading data...</div>
  ) : (
    <div>
      <div className="content__chart">
        <ActivityChart labels={dates} name={`hours`} series={series} />
      </div>

      <div className="content__title">Activity Chart for {NAME}</div>
    </div>
  );

  return <div className="content">{content}</div>;
};

export default App;
