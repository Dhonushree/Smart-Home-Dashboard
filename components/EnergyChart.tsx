import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface Props {
  data: EnergyData[];
}

export const EnergyChart = ({ data }: Props) => {
  const chartData = {
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Power Usage (W)',
        data: data.map(d => d.powerUsage),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return <Line data={chartData} />;
};