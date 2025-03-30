import { useState, useEffect } from 'react';
import { EnergyChart, DeviceCard } from '../components';
import { EnergyData } from '../types/types';
import axios from 'axios';

export const Dashboard = () => {
  const [energyData, setEnergyData] = useState<EnergyData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://your-backend-api/energy');
        setEnergyData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleToggleDevice = async (device: string) => {
    await axios.post('http://your-backend-api/control', { device });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Smart Home Dashboard</h1>
      <EnergyChart data={energyData} />
      
      <DeviceCard 
        name="Air Conditioner"
        status={energyData[0]?.deviceStatus.ac}
        powerUsage={1200}
        onToggle={() => handleToggleDevice('ac')}
      />
      
      {/* Add more devices */}
    </div>
  );
};