import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import styles from "./RegistrationChart.module.scss";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface RegistrationData {
  date: string;
  count: number;
}

interface ChartProps {
  data: RegistrationData[];
}

const RegistrationChart: FC<ChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Registrations",
        data: data.map((item) => item.count),
        borderColor: "#b87400",
        backgroundColor: "#eba224)",
        pointBorderColor: "#b87400",
        pointBackgroundColor: "#b87400"
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "green"
        },
        ticks: {
          color: "green"
        }
      },

      y: {
        title: {
          display: true,
          text: "Registration Count",
          color: "green"
        },
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          color: "green"
        }
      }
    }
  };

  return (
    <div className={styles.wrapperChart}>
      <Line data={chartData} options={options} width={400} height={200} />
    </div>
  );
};

export default RegistrationChart;
