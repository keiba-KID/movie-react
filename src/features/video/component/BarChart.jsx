import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      min: 0,
      max: 150,
      ticks: {
        stepSize: 10,
      },
    },
  },
};

const labels = [
  "0:00",
  "0:20",
  "0:30",
  "0:40",
  "0:50",
  "0:60",
  "1:10",
  "1:30",
  "1:40",
  "1:50",
  "2:60",
];

const customElements = [
  {
    label: "もっとしソたい",
    value: Math.floor(Math.random() * 51),
    color: "rgb(255, 87, 51)",
    imageUrl: require("../../../assets/stamp1.png"),
  },
  {
    label: "なるほど",
    value: Math.floor(Math.random() * 51),
    color: "rgb(76, 175, 80)",
    imageUrl: require("../../../assets/stamp2.png"),
  },
  {
    label: "みんなにつたえたい",
    value: Math.floor(Math.random() * 51),
    color: "rgb(30, 144, 255)",
    imageUrl: require("../../../assets/stamp3.png"),
  },
];

export const data = {
  labels,
  datasets: customElements.map((element) => ({
    label: element.label,
    data: labels.map(() => Math.floor(Math.random() * 51)),
    image: element.imageUrl.default,
    backgroundColor: element.color,
  })),
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
