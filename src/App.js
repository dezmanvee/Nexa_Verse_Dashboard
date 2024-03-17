import { CssBaseline, ThemeProvider, styled } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { Overview, ProductList, CustomerList, Chart, Settings, Transactions, Customer, NewCustomerAccount, Product, NewProduct } from "./pages";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import { useState } from "react";

const drawerWidth = 240;

function App() {
  const [theme, colorMode] = useMode();

  //sidebar toggle for mobile devices
  const [openModal, setOpenModal] = useState(false);

  const Offset = styled('div')(({theme}) => theme.mixins.toolbar)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            <Sidebar drawerWidth={drawerWidth} openModal={openModal}/>
            <main className="main-container">
              <Navbar drawerWidth={drawerWidth}  openModal={openModal} setOpenModal={setOpenModal}/>
                <Offset />
              <Routes>
                <Route exact path="/" element={<Overview/>} />
                <Route path="/products" element={<ProductList/>} />
                <Route path="/customer/:customerId" element={<Customer/>} /> 
                <Route path="/customers" element={<CustomerList/>} />
                <Route path="/product/:productId" element={<Product/>} />   
                <Route path="/addNewProduct" element={<NewProduct/>} />   
                <Route path="/createNewAccount" element={<NewCustomerAccount/>} />   
                <Route path="/charts" element={<Chart/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/transactions" element={<Transactions/>} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
