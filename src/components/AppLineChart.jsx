import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { customerData } from '../utils/constants';
import { yellow } from '@mui/material/colors';
import { useTheme } from '@mui/material';
import { shades } from '../theme';

const AppLineChart = () => {
    const theme = useTheme()
    const colors = shades(theme.palette.mode)
  return (
    <ResponsiveContainer width="100%" aspect={1/1}>
        <LineChart data={customerData}>
        <Line type="monotone" dataKey="All customers" stroke={yellow[600]} strokeWidth={2} />
        <XAxis dataKey="date.month" stroke={colors.grey[200]}/>
        {/* <CartesianGrid strokeDasharray="7 7"/> */}
        <Tooltip />
        </LineChart>
    </ResponsiveContainer>
  )
}
export default AppLineChart