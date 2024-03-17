import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Container,
  ListItemButton,

  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  FeaturedInfo,
  AreaLineChart,
  AppBarChart,
  RecentOrders,
  AppLineChart,
} from "../components";
import { shades } from "../theme";
import {
  salesData,
  customerData,
  analyticReport,
  transactionHistory,
} from "../utils/constants";
import { blue, green, red, yellow } from "@mui/material/colors";

const Overview = () => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);

  return (
    <Container component="section">
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
        dashboard
      </Typography>
      <Stack
        gap={2}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          marginBottom: "40px",
        }}
      >
        <FeaturedInfo
          totalAmount="43092"
          widgetType="revenue"
          percentCtn="59.2"
          comparedValue="59.2"
        />
        <FeaturedInfo
          totalAmount="989452"
          widgetType="sales"
          percentCtn="7.5"
          comparedValue="7.5"
        />
        <FeaturedInfo
          totalAmount="2587"
          widgetType="cost"
          percentCtn="-1.3"
          comparedValue="-1.3"
        />
      </Stack>
      <Box
        component="article"
        display="flex"
        gap={theme.spacing(2)}
        sx={{ flexDirection: { xs: "column", sm: "row" }, mb: "40px" }}
      >
        <Box flex={3}>
          <Typography
            variant="h6"
            noWrap
            component="h2"
            sx={{
              flexGrow: 1,
              marginBottom: "15px",
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
          >
            sales report
          </Typography>
          <Card
            sx={{
              padding: theme.spacing(3),
              backgroundColor: colors.primary[500],
            }}
          >
            <AreaLineChart
              grid
              data={salesData}
              stackIdOne={true}
              stackIdTwo={true}
              stackIdThree={false}
            />
          </Card>
        </Box>
        <Box flex={2}>
          <Typography
            variant="h6"
            noWrap
            component="h2"
            sx={{
              flexGrow: 1,
              marginBottom: "20px",
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
          >
            user analytics
          </Typography>
          <Card
            sx={{
              padding: theme.spacing(3),
              backgroundColor: colors.primary[500],
            }}
          >
            <Typography
              variant="body1"
              fontSize={16}
              color={colors.grey[200]}
              marginBottom={3}
            >
              This week statistics
            </Typography>
            <Typography variant="h4" fontWeight={500} marginBottom={6}>
              {" "}
              7,504
            </Typography>
            <AppBarChart
              data={customerData}
              activeFill="#74E0DA"
              dataKey="date.day"
            />
          </Card>
        </Box>
      </Box>
      <Box
        component="article"
        display="flex"
        gap={theme.spacing(2)}
        sx={{ flexDirection: { xs: "column", sm: "row" }, mb: "40px" }}
      >
        <Box flex={3}>
          <Typography
            variant="h6"
            noWrap
            component="h2"
            sx={{
              flexGrow: 1,
              marginBottom: "15px",
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
          >
            recent orders
          </Typography>
          <RecentOrders />
        </Box>
        <Box flex={2}>
          <Typography
            variant="h6"
            noWrap
            component="h2"
            sx={{
              flexGrow: 1,
              marginBottom: "20px",
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
          >
            analytics report
          </Typography>
          <Card
            sx={{
              backgroundColor: colors.primary[500],
            }}
          >
            <Box variant="list">
              {analyticReport.map((item) => (
                <Box key={item.text} variant="list-item">
                  <ListItemButton disableRipple>
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="space-between"
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          letterSpacing: 0,
                          variant: "body1",
                          color: colors.grey[300],
                          padding: "8px 0",
                        }}
                      >
                        {item.text}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 17,
                          fontWeight: 500,
                          letterSpacing: 0,
                          color: colors.grey[100],
                          padding: "8px 0",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </ListItemButton>
                </Box>
              ))}
            </Box>
            <AppLineChart />
          </Card>
        </Box>
      </Box>
      <Box
        component="article"
        display="flex"
        gap={theme.spacing(2)}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Box flex={3}>
          <Typography
            variant="h6"
            noWrap
            component="h2"
            sx={{
              flexGrow: 1,
              marginBottom: "15px",
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
          >
            customer report
          </Typography>
          <Card
            sx={{
              padding: theme.spacing(3),
              backgroundColor: colors.primary[500],
            }}
          >
            <AppBarChart
              data={customerData}
              activeFill={red[200]}
              inactiveFill={red[400]}
              allFill={red[700]}
              dataKey="date.month"
            />
          </Card>
        </Box>

        <Box flex={2}>
          <Typography
            variant="h6"
            noWrap
            component="h2"
            sx={{
              flexGrow: 1,
              marginBottom: "20px",
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
          >
            transaction history
          </Typography>
          <Box display="flex" flexDirection="column" gap={4}>
            <Card
              sx={{
                backgroundColor: colors.primary[500],
              }}
            >
              <Box variant="list">
                {transactionHistory.map((item) => (
                  <Box variant="list-item" key={item.tracking}>
                    <ListItemButton disableRipple>
                      <Box padding={theme.spacing(1)}>
                        <Box
                          width={35}
                          height={35}
                          backgroundColor={
                            item.id === 1
                              ? green[50]
                              : item.id === 2
                              ? blue[50]
                              : red[50]
                          }
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          borderRadius="50%"
                          marginRight="10px"
                        >
                          {item.icon}
                        </Box>
                      </Box>
                      <Box flex={1}>
                        <Typography
                          fontSize={16}
                          fontWeight={500}
                          variant="subtitle1"
                        >
                          Order #{item.tracking}
                        </Typography>
                        <Typography variant="body2" color={colors.grey[200]}>
                          {item.date}
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="flex-end"
                      >
                        <Typography
                          fontSize={16}
                          fontWeight={500}
                          variant="subtitle1"
                        >
                          +${item.amount}
                        </Typography>
                        <Typography variant="body1" color={colors.grey[200]}>
                          {item.ratio}%
                        </Typography>
                      </Box>
                    </ListItemButton>
                  </Box>
                ))}
              </Box>
            </Card>
            <Card
              sx={{
                backgroundColor: colors.primary[500],
                padding: theme.spacing(3),
              }}
            >
              <Typography variant="h6">Help & Support Chat</Typography>
              <Typography variant="body2" color={colors.grey[300]} gutterBottom>
                Typical reply within 5mins
              </Typography>
              <AvatarGroup
                max={5}
                sx={{
                  mb: 2,
                  "&.MuiAvatarGroup-root": {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    ml: 0,
                    width: "100%",
                  },
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y="
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://media.istockphoto.com/id/1500803576/photo/teenage-girl-doing-homework.jpg?s=612x612&w=0&k=20&c=-BAv5P6T8TlA0-QNk8RiEVXfm2P9i-HTMH1RjjZkTlQ="
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://media.istockphoto.com/id/1325483459/photo/working-from-home.jpg?s=612x612&w=0&k=20&c=T4Ya5jBwNxFzcuxVL6vySoT1HiSd4QKdZo64bQYKabY="
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://media.istockphoto.com/id/1794986758/photo/stressed-young-woman-at-home-holding-financial-papers-looking-at-computer-concerned-about-her.jpg?s=612x612&w=0&k=20&c=h2e6x9AbM7jHe17Spndz3hbys3SYhlZz0hQF8RLjWfk="
                />
              </AvatarGroup>
              <Button
                variant="contained"
                disableElevation
                fullWidth
                sx={{
                  backgroundColor: blue[500],
                  "&:hover": { backgroundColor: blue[600] },
                  color: "#FFFFFF",
                }}
              >
                Need Help?
              </Button>
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Overview;
