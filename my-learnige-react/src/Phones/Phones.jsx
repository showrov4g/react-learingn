import axios from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ToastContainer, toast } from "react-toast";
import { Audio, Circles } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    // .then(res => res.json())
    // .then(data => setPhones(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);
  const wave = () => toast("Hi there 👋");

  return (
    <div>
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      <div>
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      <h1>This is phone page</h1>
      <h2>This is phone length {phones.length}</h2>
      <BarChart width={1000} height={500} data={phones}>
        <XAxis></XAxis>
        <Bar dataKey="price" fill="#8884d8" />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
      <div>
        <div>
          <button onClick={wave}>Say hi!</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Phones;
