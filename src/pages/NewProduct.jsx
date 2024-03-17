import {
  Box,
  Button,
  Card,
  Container,
  MenuItem,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { shades } from "../theme";
import { blue } from "@mui/material/colors";
import { Send } from "@mui/icons-material";

const NewProduct = () => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);

  const activeProducts = [
    { id: 1, value: "Yes" },
    { id: 2, value: "No" },
  ];

  const SendButton = styled(Button)(({ theme }) => ({
    backgroundColor: colors.blueAccent[500],
    "&:hover": {
      backgroundColor: colors.blueAccent[600],
    },
    // alignSelf: 'flex-end'
  }));

  return (
    <Container>
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
        Add a new product
      </Typography>
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
              padding: theme.spacing(4),
              backgroundColor: blue[100],
              color: "#000000",
              fontWeight: "700",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: theme.spacing(2),
              alignItems: "center",
              padding: theme.spacing(3),
            }}
          >
            <Box flex={1} component="form" noValidate autoComplete="off">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing(2),
                  mb: theme.spacing(2),
                }}
              >
                <label htmlFor="file" style={{ cursor: "pointer" }}>
                  Product Image
                </label>
                <input type="file" id="file" />
              </Box>
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
                  marginTop: theme.spacing(2),
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
            <SendButton
              endIcon={<Send />}
              variant="contained"
              sx={{
                marginTop: { xs: theme.spacing(3), md: 0 },
                alignSelf: { xs: "center", md: "flex-end" },
              }}
            >
              submit
            </SendButton>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};
export default NewProduct;
