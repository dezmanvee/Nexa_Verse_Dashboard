import {
  Dashboard,
  Groups,
  ProductionQuantityLimits,
  Paid,
  AdminPanelSettings,
  PieChart,
  CardGiftcard,
  Settings,
  Padding,  
} from "@mui/icons-material";


//Navigation items for sidebar
export const menuItems = [
  {
    text: "Overview",
    icon: <Dashboard />,
    path: "/",
  },
  {
    text: "Products",
    icon: <ProductionQuantityLimits />,
    path: "/products",
  },
  {
    text: "Customers",
    icon: <Groups />,
    path: "/customers",
},
{
  text: "Charts",
  icon: <PieChart />,
  path: "/charts",
},
  {
    text: "Transactions",
    icon: <Paid />,
    path: "/transactions",
  },
  {
    text: "Settings",
    icon: <AdminPanelSettings />,
    path: "/settings",
  },
];

//Dummy sales data for AreaChart
export const salesData = [
  {
    month: 'Jan',
    "Active Sales": 4000,
    "Net Sales": 2400,
    "Passive Sales": 2400,
  },
  {
    month: 'Feb',
    "Active Sales": 3000,
    "Net Sales": 1398,
    "Passive Sales": 2210,
  },
  {
    month: 'Mar',
    "Active Sales": 2000,
    "Net Sales": 9800,
    "Passive Sales": 2290,
  },
  {
    month: 'Apr',
    "Active Sales": 2780,
    "Net Sales": 3908,
    "Passive Sales": 2000,
  },
  {
    month: 'May',
    "Active Sales": 1890,
    "Net Sales": 4800,
    "Passive Sales": 2181,
  },
  {
    month: 'Jun',
    "Active Sales": 2390,
    "Net Sales": 3800,
    "Passive Sales": 2500,
  },
  {
    month: 'Jul',
    "Active Sales": 3490,
    "Net Sales": 4300,
    "Passive Sales": 2100,
  },
  {
    month: 'Aug',
    "Active Sales": 4000,
    "Net Sales": 2400,
    "Passive Sales": 2400,
  },
  {
    month: 'Sep',
    "Active Sales": 3000,
    "Net Sales": 1398,
    "Passive Sales": 2210,
  },
  {
    month: 'Oct',
    "Active Sales": 2000,
    "Net Sales": 9800,
    "Passive Sales": 2290,
  },
  {
    month: 'Nov',
    "Active Sales": 2780,
    "Net Sales": 3908,
    "Passive Sales": 2000,
  },
  {
    month: 'Dec',
    "Active Sales": 1890,
    "Net Sales": 4800,
    "Passive Sales": 2181,
  },
];
//Dummy sales data for AreaChart
export const productSalesData = [
  {
    month: 'Jan',
    "Active Sales": 4000,
    "Net Sales": 2400,
    "Passive Sales": 2400,
  },
  {
    month: 'Feb',
    "Active Sales": 3000,
    "Net Sales": 1398,
    "Passive Sales": 2210,
  },
  {
    month: 'Mar',
    "Active Sales": 2000,
    "Net Sales": 9800,
    "Passive Sales": 2290,
  },
  {
    month: 'Apr',
    "Active Sales": 2780,
    "Net Sales": 3908,
    "Passive Sales": 2000,
  },
  {
    month: 'May',
    "Active Sales": 1890,
    "Net Sales": 4800,
    "Passive Sales": 2181,
  },
];


//Dummy customer data for BarChart
export const customerData = [
  {
    date: {
      month: 'Jan',
      day: 'Su',
    },
    "Active customers": 4000,
    "Inactive customers": 2400,
    "All customers": 6400,
  },
  {
    date: {
      month: 'Feb',
      day: 'Mo',
    },
    "Active customers": 3000,
    "Inactive customers": 1398,
    "All customers": 4398,
  },
  {
    date: {
      month: 'Mar',
      day: 'Tu',
    },
    "Active customers": 2000,
    "Inactive customers": 9800,
    "All customers": 11800,
  },
  {
    date: {
      month: 'Apr',
      day: 'We',
    },
    "Active customers": 2780,
    "Inactive customers": 3908,
    "All customers": 6088,
  },
  {
    date: {
      month: 'May',
      day: 'Th',
    },
    "Active customers": 1890,
    "Inactive customers": 4800,
    "All customers": 6690,
  },
  {
    date: {
      month: 'Jun',
      day: 'Fr',
    },
    "Active customers": 2390,
    "Inactive customers": 3800,
    "All customers": 6190,
  },
  {
    date: {
      month: 'Jul',
      day: 'Sa',
    },
    "Active customers": 2390,
    "Inactive customers": 3800,
    "All customers": 6190,
  },
];


export const analyticReport = [
  {text: "NexaNectar Finance Growth", value: "+45.14%"},
  {text: "NexaNectar Expenses Ratio", value: "0.46%"},
  {text: "Business Risk Cases", value: "Low"},
]

export const transactionHistory = [
  {
    icon: <CardGiftcard color="success"/>,
    tracking: "00342678",
    date: "Today, 2:00AM",
    amount: 1430,
    ratio: "78",
    id: 1
  },
  {
    icon: <Padding color="info"/>,
    tracking: "00342678",
    date: "8 February, 1:45PM",
    amount: 2530,
    ratio: "8.5",
    id: 2
  },
  {
    icon: <Settings color="error"/>,
    tracking: "00139867",
    date: "Yesterday, 4:06PM",
    amount: 430,
    ratio: "23.8",
    id: 3
  },
]

// customer data for customer list page
export const rowData = [
  {
    id: 1,
    username: "Snow Bekker",
    avatar:
      "https://media.istockphoto.com/id/1325483459/photo/working-from-home.jpg?s=612x612&w=0&k=20&c=T4Ya5jBwNxFzcuxVL6vySoT1HiSd4QKdZo64bQYKabY=",
    email: "snowbekker@gmail.com",
    status: "active",
    transaction: "$180.90",
  },
  {
    id: 2,
    username: "John Doe",
    avatar:
      "https://media.istockphoto.com/id/1500803576/photo/teenage-girl-doing-homework.jpg?s=612x612&w=0&k=20&c=-BAv5P6T8TlA0-QNk8RiEVXfm2P9i-HTMH1RjjZkTlQ=",
    email: "johndoe@gmail.com",
    status: "inactive",
    transaction: "$120.50",
  },
  {
    id: 3,
    username: "Jane Smith",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
    email: "janesmith@gmail.com",
    status: "active",
    transaction: "$220.75",
  },
  {
    id: 4,
    username: "Mike Johnson",
    avatar:
      "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=",
    email: "mikejohnson@gmail.com",
    status: "inactive",
    transaction: "$90.20",
  },
  {
    id: 5,
    username: "Emily White",
    avatar:
      "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=",
    email: "emilywhite@gmail.com",
    status: "active",
    transaction: "$150.30",
  },
  {
    id: 6,
    username: "Alex Brown",
    avatar:
      "https://media.istockphoto.com/id/1794986758/photo/stressed-young-woman-at-home-holding-financial-papers-looking-at-computer-concerned-about-her.jpg?s=612x612&w=0&k=20&c=h2e6x9AbM7jHe17Spndz3hbys3SYhlZz0hQF8RLjWfk=",
    email: "alexbrown@gmail.com",
    status: "inactive",
    transaction: "$200.45",
  },
  {
    id: 7,
    username: "Sophie Davis",
    avatar:
      "https://media.istockphoto.com/id/1794986758/photo/stressed-young-woman-at-home-holding-financial-papers-looking-at-computer-concerned-about-her.jpg?s=612x612&w=0&k=20&c=h2e6x9AbM7jHe17Spndz3hbys3SYhlZz0hQF8RLjWfk=",
    email: "sophiedavis@gmail.com",
    status: "active",
    transaction: "$130.60",
  },
  {
    id: 8,
    username: "Chris Lee",
    avatar:
      "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=",
    email: "chrislee@gmail.com",
    status: "inactive",
    transaction: "$170.80",
  },
  {
    id: 9,
    username: "Eva Miller",
    avatar:
      "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=",
    email: "evamiller@gmail.com",
    status: "active",
    transaction: "$110.95",
  },
  {
    id: 10,
    username: "Ryan Taylor",
    avatar:
      "https://media.istockphoto.com/id/1794986758/photo/stressed-young-woman-at-home-holding-financial-papers-looking-at-computer-concerned-about-her.jpg?s=612x612&w=0&k=20&c=h2e6x9AbM7jHe17Spndz3hbys3SYhlZz0hQF8RLjWfk=",
    email: "ryantaylor@gmail.com",
    status: "inactive",
    transaction: "$190.25",
  },
];
// customer data for customer list page
export const productsData = [
  {
    id: 1,
    name: "Apple Airpod",
    img:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kfGVufDB8fDB8fHww",
    stock: "128",
    status: "active",
    price: "$180.90",
    sales: "287",
    inStock: "Yes"
  },
  {
    id: 2,
    name: "MacBook Air",
    img:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    stock: "70",
    status: "inactive",
    price: "$120.50",
    sales: "227",
    inStock: "Yes"
  },
  {
    id: 3,
    name: "EliteBook HP",
    img:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    stock: "200",
    status: "active",
    price: "$220.75",
    sales: "307",
    inStock: "Yes"
  },
  {
    id: 4,
    name: "Wireless Headset",
    img:
      "https://plus.unsplash.com/premium_photo-1679966785927-c0b3e2029d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
    stock: "345",
    status: "inactive",
    price: "$90.20",
    sales: "509",
    inStock: "Yes"
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    img:
      "https://media.istockphoto.com/id/1460552748/photo/old-pc-keyboard-in-the-trash.webp?b=1&s=170667a&w=0&k=20&c=4rts0NIFL5KMHYih8KvTULEx0j0QT4Sgj6bkOhfAklg=",
    stock: "24",
    status: "active",
    price: "$150.30",
    sales: "300",
    inStock: "Yes"
  },
  {
    id: 6,
    name: "iPhone 14 Pro Max",
    img:
      "https://media.istockphoto.com/id/1794986758/photo/stressed-young-woman-at-home-holding-financial-papers-looking-at-computer-concerned-about-her.jpg?s=612x612&w=0&k=20&c=h2e6x9AbM7jHe17Spndz3hbys3SYhlZz0hQF8RLjWfk=",
    stock: "790",
    status: "inactive",
    price: "$200.45",
    sales: "278",
    inStock: "Yes"
  },
  {
    id: 7,
    name: "Electric Kettle",
    img:
      "https://media.istockphoto.com/id/1794986758/photo/stressed-young-woman-at-home-holding-financial-papers-looking-at-computer-concerned-about-her.jpg?s=612x612&w=0&k=20&c=h2e6x9AbM7jHe17Spndz3hbys3SYhlZz0hQF8RLjWfk=",
    stock: "567",
    status: "active",
    price: "$130.60",
    sales: "405",
    inStock: "Yes"
  },
  {
    id: 8,
    name: "Standing Fan",
    img:
      "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=",
    stock: "45",
    status: "inactive",
    price: "$170.80",
    sales: "149",
    inStock: "Yes"
  },
  {
    id: 9,
    name: "Microwave",
    img:
      "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=",
    stock: "97",
    status: "active",
    price: "$110.95",
    sales: "450",
    inStock: "Yes"
  },
  {
    id: 10,
    name: "Samsung TV",
    img:
      "https://media.istockphoto.com/id/1794986758/photo/stressed-young-woman-at-home-holding-financial-papers-looking-at-computer-concerned-about-her.jpg?s=612x612&w=0&k=20&c=h2e6x9AbM7jHe17Spndz3hbys3SYhlZz0hQF8RLjWfk=",
    stock: "120",
    status: "inactive",
    price: "$190.25",
    sales: "223",
    inStock: "Yes"
  },
];