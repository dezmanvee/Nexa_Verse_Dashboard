import { useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { shades } from "../theme";

const AppBarChart = ({ data, activeFill,inactiveFill, allFill, dataKey, grid }) => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);
  return (
    <ResponsiveContainer width="100%" aspect={2 / 1.5}>
      <BarChart data={data}>
        <XAxis dataKey={dataKey} stroke={colors.grey[200]} />
        {activeFill && <Bar dataKey="Active customers" fill={activeFill}/>}
        {inactiveFill && <Bar dataKey="Inactive customers" fill={inactiveFill} />}
        {allFill && <Bar dataKey="All customers" fill={allFill} />}
        {grid && <CartesianGrid/>}
        <Legend />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default AppBarChart;


