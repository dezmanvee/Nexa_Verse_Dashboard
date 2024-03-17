import { Avatar, Box, Button, Container, Modal, Tooltip, Typography, styled, useTheme } from "@mui/material";
import { shades } from "../theme";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, DriveFileRenameOutline } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { productsData } from "../utils/constants";
import { useState } from "react";


const ProductList = () => {
  const theme = useTheme()
  const colors = shades(theme.palette.mode)
  const [data, setData] = useState(productsData);
  const [openModal, setOpenModal] = useState({id: null, name: '', isOpen: false})

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setOpenModal({...openModal, isOpen: false});
  };

  const deleteModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: colors.primary[500],
    border: `1px solid ${colors.redAccent[500]}`,
    borderRadius: '10px',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }

  const DeleteButton = styled(Button)(({theme}) => ({
    backgroundColor: colors.redAccent[500],
    "&:hover": {
      backgroundColor: colors.redAccent[600]
    },
    color: '#fff',
  }))

  const CancelButton = styled(Button)(({theme}) => ({
    backgroundColor: colors.grey[400],
    "&:hover": {
      backgroundColor: colors.grey[500]
    },
    color: '#fff',
  }))


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => (
        <>
          <Avatar
            alt={params.row.name}
            src={params.row.img}
            sx={{ width: "32px", height: "32px", mr: 2 }}
          />
          <Typography variant="body2">{params.row.name}</Typography>
        </>
      ),
    },
    { field: "stock", headerName: "Stock", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "price", headerName: "Price", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => (
        <>
          <Link to={`/product/${params.row.id}`}>
            <Tooltip title="edit product details">
            <Box
              width={35}
              height={35}
              sx={{
                backgroundColor: blue[50],
                "&:hover": {
                  backgroundColor: blue[100],
                },
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              marginRight="10px"
              cursor="pointer"
            >
              <DriveFileRenameOutline
                sx={{ cursor: "pointer", color: blue[500] }}
              />
            </Box>
            </Tooltip>
          </Link>
          <Tooltip title="delete product from list">
          <Box
            width={35}
            height={35}
            sx={{
              backgroundColor: red[50],
              "&:hover": {
                backgroundColor: red[100],
              },
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            cursor="pointer"
            component="Link"
            onClick={() => setOpenModal({id: params.row.id, name: params.row.name, isOpen: true})}
          >
            <DeleteOutline sx={{ cursor: "pointer", color: red[500] }} />
          </Box>
          </Tooltip>
          {/* Modal for deleting customer */}
          <Modal
            open={openModal.isOpen}
            onClose={() => setOpenModal({...openModal, isOpen: false})}
            sx={{
              "& .MuiModal-backdrop": {
                backgroundColor: `rgba(0, 0, 0, 0.30)`
              }
            }}
          >
            <Box sx={deleteModalStyle} >
              <Typography variant="subtitle1">
                Are you sure you want to delete <span style={{color: colors.blueAccent[500]}}>{openModal.name}</span> from the customer list?
              </Typography>
              <Box display="flex" gap={theme.spacing(2)} flexWrap="wrap">
                <DeleteButton onClick={() => handleDelete(openModal.id)}>delete</DeleteButton>
                <CancelButton variant="contained" onClick={() => setOpenModal({...openModal, isOpen: false})}>cancel</CancelButton>
              </Box>
            </Box>
          </Modal>
        </>
      ),
    },
  ];

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
        products
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Container>
  )
}
export default ProductList