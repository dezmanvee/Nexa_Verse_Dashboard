import {
  Box,
  Button,
  Card,
  Container,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { shades } from "../theme";
import { Send } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const NewCustomerAccount = () => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);

  const activeCustomers = [
    { id: 1, value: "Yes" },
    { id: 2, value: "No" },
  ];

  const SendButton = styled(Button)(({theme})=> ({
    backgroundColor: colors.blueAccent[500],
    "&:hover": {
      backgroundColor: colors.blueAccent[600]
    },
    marginTop: theme.spacing(7),
  }))

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
        create new customer
      </Typography>
      <Card sx={{ backgroundColor: colors.primary[500] }}>
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
          component="form"
          noValidate
          autoComplete="off"
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          columnGap={theme.spacing(4)}
          sx={{
            padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(
              6
            )} ${theme.spacing(3)}`,
          }}
        >
          <TextField
            type="text"
            label="Full Name"
            variant="standard"
            sx={{ width: { xs: "100%", md: "450px" } }}
            color="info"
          />
          <TextField
            type="text"
            label="Username"
            variant="standard"
            sx={{ width: { xs: "100%", md: "450px" } }}
            color="info"
            margin="dense"
          />
          <TextField
            type="email"
            label="Email"
            variant="standard"
            sx={{ width: { xs: "100%", md: "450px" } }}
            color="info"
            margin="dense"
          />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            sx={{ width: { xs: "100%", md: "450px" } }}
            color="info"
            margin="dense"
          />
          <TextField
            type="phone"
            label="Phone"
            variant="standard"
            sx={{ width: { xs: "100%", md: "450px" } }}
            color="info"
            margin="dense"
          />
          <TextField
            type="text"
            label="Address"
            variant="standard"
            sx={{ width: { xs: "100%", md: "450px" } }}
            color="info"
            margin="dense"
          />
          <Box sx={{ width: { xs: "100%", md: "450px" }, marginTop: theme.spacing(3) }}>
            <FormLabel id="gender">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="radio-gender-buttons"
              name="gender"
            >
              <FormControlLabel
                value="female"
                control={<Radio color="info" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="info" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio color="info" />}
                label="Other"
              />
            </RadioGroup>
          </Box>

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
            }}
            color="info"
            margin="dense"
            // value={customer}
          >
            {activeCustomers.map((customer) => (
              <MenuItem key={customer.id} value={customer.value}>
                {customer.value}
              </MenuItem>
            ))}
          </TextField>
          
          <SendButton endIcon={<Send/>} variant="contained">submit</SendButton>
        </Box>
      </Card>
    </Container>
  );
};
export default NewCustomerAccount;
