import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { shades } from "../theme";
import { blue } from "@mui/material/colors";
import {
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { productSalesData } from "../utils/constants";
import {
  AreaChart,
  Area,
  XAxis,
  Legend,
  Tooltip as AreaTooltip,
  ResponsiveContainer,
} from "recharts";

const Product = () => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);

  const ProductEditButton = styled(Button)({
    backgroundColor: colors.redAccent[500],
    color: "#FCFCFC",
    "&:hover": {
      backgroundColor: colors.redAccent[400],
    },
    marginBottom: theme.spacing(2),
  });

  const UpdateButton = styled(Button)({
    backgroundColor: colors.blueAccent[500],
    color: "#FCFCFC",
    "&:hover": {
      backgroundColor: colors.blueAccent[400],
    },
  });

  const activeProducts = [
    { id: 1, value: "Yes" },
    { id: 2, value: "No" },
  ];


  return (
    <Container>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography
          variant="h5"
          noWrap
          component="h2"
          sx={{
            flexGrow: 1,
            marginBottom: "20px",
            letterSpacing: "1px",
            textTransform: "capitalize",
            fontWeight: 700,
          }}
        >
          Edit product details
        </Typography>
        <Link to="/addNewProduct">
          <ProductEditButton>Add a new product</ProductEditButton>
        </Link>
      </Box>
      {/* Top Containers */}
      <Box
        component="article"
        display="flex"
        gap={theme.spacing(2)}
        sx={{ flexDirection: { xs: "column", sm: "row" }, mb: "40px" }}
      >
        {/* Left */}
        <Box flex={2}>
          <Card
            sx={{
              //   padding: theme.spacing(3),
              backgroundColor: colors.primary[500],
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: theme.spacing(2),
                backgroundColor: blue[100],
                color: "#000000",
                mb: theme.spacing(3),
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  flexGrow: 1,
                  marginBottom: "8px",
                  letterSpacing: "1px",
                  textTransform: "capitalize",
                  fontWeight: "700",
                }}
              >
                sales performance
              </Typography>
            </Box>
            <Box padding={theme.spacing(2)}>
              <ResponsiveContainer width="100%" aspect={5 / 1}>
                <AreaChart data={productSalesData}>
                  <XAxis dataKey="month" stroke={colors.grey[200]} />
                  <Area
                    type="monotone"
                    dataKey="Active Sales"
                    stroke={colors.redAccent[500]}
                    fill={colors.redAccent[400]}
                  />
                  <AreaTooltip />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Box>
        {/* Right */}
        <Box flex={1}>
          <Card
            sx={{
              backgroundColor: colors.primary[500],
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: theme.spacing(2),
                backgroundColor: blue[100],
                color: "#000000",
              }}
            >
              <Avatar
                src="https://media.istockphoto.com/id/1325483459/photo/working-from-home.jpg?s=612x612&w=0&k=20&c=T4Ya5jBwNxFzcuxVL6vySoT1HiSd4QKdZo64bQYKabY="
                alt=""
                sx={{ width: "40px", height: "40px", mr: theme.spacing(2) }}
              />

              <Typography variant="subtitle1" fontWeight={700}>
                Apple Airpod
              </Typography>
            </Box>
            <Box padding={theme.spacing(2)}>
              <List>
                <Box
                  disablePadding
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemText primary="Product ID:" />
                  <ListItemText primary="1" />
                </Box>
                <ListItem disablePadding>
                  <ListItemText primary="Total sales:" />
                  <ListItemText primary="1889" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Active:" />
                  <ListItemText primary="Yes" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="In stock:" />
                  <ListItemText primary="Yes" />
                </ListItem>
              </List>
            </Box>
          </Card>
        </Box>
      </Box>
      {/* Bottom Container */}
      <Box flex={1}>
        <Card
          sx={{
            // padding: theme.spacing(3),
            backgroundColor: colors.primary[500],
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: theme.spacing(2),
              backgroundColor: blue[100],
              color: "#000000",
              fontWeight: "700",
            }}
          >
            Enter details for product update
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: theme.spacing(2),
              alignItems: "center",
              padding: theme.spacing(3),
            }}
          >
            {/* left */}
            <Box flex={2} component="form" noValidate autoComplete="off">
              <TextField
                type="text"
                label="Product Name"
                variant="standard"
                sx={{
                    width: {
                      xs: "100%",
                      md: "450px",
                    },
                  }}
                color="info"
              />
              <TextField
                select
                label="In stock"
                variant="standard"
                defaultValue="Yes"
                sx={{
                  width: {
                    xs: "100%",
                    md: "450px",
                  },
                  "& .MuiMenu-paper": {
                    backgroundColor: colors.primary[500],
                  },
                  marginTop: theme.spacing(3),
                }}
                color="info"
                margin="dense"
                // value={product}
              >
                {activeProducts.map((product) => (
                  <MenuItem key={product.id} value={product.value}>
                    {product.value}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Active"
                variant="standard"
                defaultValue="Yes"
                sx={{
                  width: {
                    xs: "100%",
                    md: "450px",
                  },
                  "& .MuiMenu-paper": {
                    backgroundColor: colors.primary[500],
                  },
                  marginTop: theme.spacing(3),
                }}
                color="info"
                margin="dense"
                // value={product}
              >
                {activeProducts.map((product) => (
                  <MenuItem key={product.id} value={product.value}>
                    {product.value}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Right */}
            <Box flex={1} width="100%" height="100%">
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "auto", md: "150px" },
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  justifyContent: {
                    xs: "space-between",
                    md: "space-between",
                  },
                  alignItems: { xs: "center", md: "center" },
                }}
              >
                <Box display="flex" gap={theme.spacing(2)}>
                  <Avatar
                    src="https://media.istockphoto.com/id/1325483459/photo/working-from-home.jpg?s=612x612&w=0&k=20&c=T4Ya5jBwNxFzcuxVL6vySoT1HiSd4QKdZo64bQYKabY="
                    alt=""
                    sx={{
                      width: "100px",
                      height: "100px",
                      mr: theme.spacing(2),
                    }}
                  />

                  <Tooltip title="upload a profile photo">
                    <label
                      htmlFor="file"
                      style={{ alignSelf: "flex-end", cursor: "pointer" }}
                    >
                      <Publish />
                    </label>
                  </Tooltip>
                  <input type="file" id="file" style={{ display: "none" }} />
                </Box>
                <UpdateButton size="small">update</UpdateButton>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default Product;
