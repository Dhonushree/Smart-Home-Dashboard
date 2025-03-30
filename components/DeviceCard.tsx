import { Card, Switch, Typography } from '@mui/material';

interface DeviceProps {
  name: string;
  status: boolean;
  powerUsage: number;
  onToggle: () => void;
}

export const DeviceCard = ({ name, status, powerUsage, onToggle }: DeviceProps) => (
  <Card sx={{ p: 2, mb: 2 }}>
    <Typography variant="h6">{name}</Typography>
    <Typography>Usage: {powerUsage}W</Typography>
    <Switch checked={status} onChange={onToggle} />
  </Card>
);