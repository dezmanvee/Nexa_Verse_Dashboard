import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  TextField,
  Tooltip,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { shades } from "../theme";
import { blue } from "@mui/material/colors";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PersonOutline,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const accountDetails = [
  {
    icon1: <PersonOutline />,
    username: "jimmyfox234",
    icon2: <CalendarToday />,
    dob: "10.12.1999",
  },
];
const contactDetails = [
  {
    icon1: <PersonOutline />,
    phone: "+1 980 3453",
    icon2: <MailOutline />,
    email: "jimmyfox@gmail.com",
    icon3: <LocationSearching />,
    address: "Lagos, Nigeria",
  },
];

const Customer = () => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);

  const AccountButton = styled(Button)({
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
    // marginBottom: theme.spacing(2),
  });

  return (
    <Container>
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
          Update Profile
        </Typography>
        <Link to="/createNewAccount">
          <AccountButton>Create an account</AccountButton>
        </Link>
      </Box>
      <Box
        component="article"
        display="flex"
        gap={theme.spacing(2)}
        sx={{ flexDirection: { xs: "column", sm: "row" }, mb: "40px" }}
      >
        <Box flex={2}>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  flexDirection: "column",
                  justifyContent: "centerS",
                }}
              >
                <Typography variant="subtitle1" fontWeight={700}>
                  Snow Bekker
                </Typography>
                <Typography variant="body2">Data Analyst</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                padding: `${theme.spacing(1)} ${theme.spacing(
                  3
                )} ${theme.spacing(3)}`,
              }}
            >
              <Typography
                variant="subtitle1"
                color={colors.grey[200]}
                fontWeight={500}
                marginBottom="12px"
              >
                Account Details
              </Typography>
              <Box variant="list">
                {accountDetails.map((detail, idx) => (
                  <Box
                    variant="list-item"
                    display="flex"
                    flexDirection="column"
                    gap={1}
                    key={idx}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      color={colors.grey[400]}
                      marginBottom={1}
                    >
                      <Box
                        width={25}
                        height={25}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50%"
                        marginRight="10px"
                      >
                        {detail.icon1}
                      </Box>
                      <Box flex={1}>
                        <Typography fontSize={14} variant="body2">
                          {detail.username}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      color={colors.grey[400]}
                      marginBottom={1}
                    >
                      <Box
                        width={25}
                        height={25}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50%"
                        marginRight="10px"
                      >
                        {detail.icon2}
                      </Box>
                      <Box flex={1}>
                        <Typography fontSize={14} variant="body2">
                          {detail.dob}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Typography
                variant="subtitle1"
                color={colors.grey[200]}
                fontWeight={500}
                margin="12px 0"
              >
                Contact Details
              </Typography>
              <Box variant="list">
                {contactDetails.map((detail, idx) => (
                  <Box
                    variant="list-item"
                    display="flex"
                    flexDirection="column"
                    gap={1}
                    key={idx}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      color={colors.grey[400]}
                      marginBottom={1}
                    >
                      <Box
                        width={25}
                        height={25}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50%"
                        marginRight="10px"
                      >
                        {detail.icon1}
                      </Box>
                      <Box flex={1}>
                        <Typography fontSize={14} variant="body2">
                          {detail.phone}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      color={colors.grey[400]}
                      marginBottom={1}
                    >
                      <Box
                        width={25}
                        height={25}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50%"
                        marginRight="10px"
                      >
                        {detail.icon2}
                      </Box>
                      <Box flex={1}>
                        <Typography fontSize={14} variant="body2">
                          {detail.email}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      color={colors.grey[400]}
                      marginBottom={1}
                    >
                      <Box
                        width={25}
                        height={25}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50%"
                        marginRight="10px"
                      >
                        {detail.icon3}
                      </Box>
                      <Box flex={1}>
                        <Typography fontSize={14} variant="body2">
                          {detail.address}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Box>
        {/* Right Container */}
        <Box flex={3}>
          <Card
            sx={{
              backgroundColor: colors.primary[500],
            }}
          >
            <Box
              sx={{
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "flex-start",
                padding: theme.spacing(2),
                backgroundColor: blue[100],
                color: "#000000",
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Enter details for profile update
              </Typography>
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
              <Box
                flex={2}
                component="form"
                noValidate
                autoComplete="off"
              >
                <TextField
                  type="text"
                  label="Full Name"
                  variant="standard"
                  fullWidth
                  color="info"
                />
                <TextField
                  type="text"
                  label="Username"
                  variant="standard"
                  fullWidth
                  color="info"
                  margin="dense"
                />
                <TextField
                  type="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  color="info"
                  margin="dense"
                />
                <TextField
                  type="phone"
                  label="Phone"
                  variant="standard"
                  fullWidth
                  color="info"
                  margin="dense"
                />
                <TextField
                  type="text"
                  label="Address"
                  variant="standard"
                  fullWidth
                  color="info"
                  margin="dense"
                />
              </Box>
              {/* right */}
              <Box flex={1} width="100%" height="100%">
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "auto", md: "280px" },
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
              {/* Right end */}
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};
export default Customer;
