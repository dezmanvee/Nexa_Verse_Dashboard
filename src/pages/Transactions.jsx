import { Container, Typography, useTheme } from "@mui/material"
import { shades } from "../theme"


const Transactions = () => {
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
        transactions
      </Typography>
    </Container>
  )
}
export default Transactions