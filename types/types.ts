export interface EnergyData {
    timestamp: string;
    powerUsage: number;
    temperature: number;
    deviceStatus: {
      ac: boolean;
      lights: boolean;
      refrigerator: boolean;
    };
  }