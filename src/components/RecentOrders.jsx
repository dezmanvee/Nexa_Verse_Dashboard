import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  useTheme,
} from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";
import { shades } from "../theme";

function createData(trackingNo, productName, totalOrder, status, totalAmount) {
  return { trackingNo, productName, totalOrder, status, totalAmount };
}

const rows = [
  createData("234422", "Keyboard", 3, "approved", 750),
  createData("987654", "Mouse", 5, "pending", 300),
  createData("123456", "Monitor", 1, "rejected", 500),
  createData("789012", "Headphones", 2, "approved", 120),
  createData("345678", "Printer", 4, "pending", 450),
  createData("901234", "Laptop", 1, "approved", 1200),
  createData("567890", "External Hard Drive", 2, "rejected", 200),
  createData("456789", "Tablet", 3, "approved", 600),
  // createData("234567", "Camera", 1, "pending", 800),
];

const StyledChip = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  padding: "1px",
});

const RecentOrders = () => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, backgroundColor: colors.primary[500] }}
        aria-label="recent orders"
      >
        <TableHead>
          <TableRow>
            <TableCell>Tracking No.</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Total Order</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.trackingNo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.trackingNo}
              </TableCell>
              <TableCell align="left">{row.productName}</TableCell>
              <TableCell align="left">{row.totalOrder}</TableCell>
              <TableCell align="left">
                {row.status === "approved" ? (
                  <StyledChip sx={{ bgcolor: green[50], color: green[600] }}>
                    approved
                  </StyledChip>
                ) : row.status === "pending" ? (
                  <StyledChip sx={{ bgcolor: yellow[50], color: yellow[800] }}>
                    pending
                  </StyledChip>
                ) : (
                  <StyledChip sx={{ bgcolor: red[50], color: red[600] }}>
                    rejected
                  </StyledChip>
                )}
              </TableCell>
              <TableCell align="right">${row.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default RecentOrders;
