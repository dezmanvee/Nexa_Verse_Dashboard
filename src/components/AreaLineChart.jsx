import {
  AreaChart,
  Area,
  XAxis,
  Legend,
  Tooltip,
  CartesianAxis,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material";
import { shades } from "../theme";

const AreaLineChart = ({
  dataKey,
  data,
  grid,
  stackIdOne,
  stackIdTwo,
  stackIdThree,
}) => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);
  return (
    <ResponsiveContainer width="100%" aspect={5 / 4}>
      <AreaChart data={data}>
        <XAxis dataKey="month" stroke={colors.grey[200]} />
        {stackIdTwo && (
          <Area
            stackId="1"
            type="monotone"
            dataKey="Net Sales"
            stroke={colors.redAccent[500]}
            fill={colors.redAccent[400]}
          />
        )}
        {stackIdOne && (
          <Area
            stackId="2"
            type="monotone"
            dataKey="Active Sales"
            stroke={colors.blueAccent[500]}
            fill={colors.blueAccent[400]}
          />
        )}
        {stackIdThree && (
          <Area
            stackId="3"
            type="monotone"
            dataKey="Passive Sales"
            stroke="#ffeb3b"
            fill="#ffee58"
          />
        )}
        <Tooltip />
        {grid && <CartesianAxis strokeDasharray="3 3" />}
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default AreaLineChart;
