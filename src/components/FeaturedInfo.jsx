import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import { shades } from "../theme";
import { TrendingDown, TrendingUp } from "@mui/icons-material";

const FeaturedInfo = ({ widgetType, percentCtn, comparedValue, totalAmount }) => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);

  const cardColor = () =>
    Number(percentCtn) > 0 ? colors.blueAccent[500] : colors.redAccent[500];

  return (
    <>
      {Number(percentCtn) && (
        <Card
          sx={{
            padding: theme.spacing(3),
            backgroundColor: colors.primary[500],
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: cardColor,
          }}
          elevation={0}
        >
          <Typography
            variant="h6"
            gutterBottom
            marginRight="5px"
            sx={{ mb: theme.spacing(1) }}
          >
            Total {widgetType} generated
          </Typography>
          <Box display="flex" flexDirection="row" columnGap={2}>
            <Typography variant="h6">${Number(totalAmount).toLocaleString()}</Typography>
            <Button
              variant="contained"
              component="span"
              disableElevation
              disableRipple
              startIcon={
                Number(percentCtn) > 0 ? <TrendingUp /> : <TrendingDown />
              }
              sx={{
                backgroundColor: cardColor,
                "&:hover": {
                  backgroundColor: cardColor,
                },
                color: colors.white[500],
                cursor: "default",
                mb: theme.spacing(2),
              }}
            >
              {Number(percentCtn)}%
            </Button>
          </Box>
          <Typography variant="body2" component="span">
            You made an extra{" "}
            <Typography variant="body2" component="span" color={cardColor}>
              ${comparedValue}
            </Typography>{" "}
            compared to last month
          </Typography>
        </Card>
      )}
    </>
  );
};
export default FeaturedInfo;
