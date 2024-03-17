import { Container, Typography, useTheme } from "@mui/material"
import { shades } from "../theme"


const Chart = () => {
  const theme = useTheme()
  const colors = shades(theme.palette.mode)

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
        charts
      </Typography>
    </Container>
  )
}
export default Chart