import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Logo from "../assets/logo.png";
import { PageContainer } from '@toolpad/core/PageContainer';
import Inventory from './Inventory';
// Define the navigation items

 // Import Link for routing

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,  
  },
  {
    segment: 'sales',
    title: 'Sales',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'inventory',
    title: 'Inventory',
    icon: <WarehouseIcon />,

    children: [
      {
        segment: 'bigrolls/buttrolls',
        title: 'Bigrolls/Buttrolls',
        icon: <DescriptionIcon />,

      },
      {
        segment: 'delivery receipt',
        title: 'Delivery Receipt',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'acknowledgement receipt',
        title: 'Acknowledgement Receipt',
        icon: <DescriptionIcon />,
      },
    ], // Link for the Inventory page
  },
  {
    segment: 'customers',
    title: 'Customers',
    icon: <PersonIcon />,
  },
  {
    segment: 'suppliers',
    title: 'Suppliers',
    icon: <LocalShippingIcon />,
  },
  {
    segment: 'purchases',
    title: 'Purchase',
    icon: <ShoppingBagIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Invoice Monitoring',
  },
  {
    segment: 'receipts',
    title: 'Receipts',
    icon: <ReceiptIcon />,
    children: [
      {
        segment: 'sales invoice',
        title: 'Sales Invoice',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'delivery receipt',
        title: 'Delivery Receipt',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'acknowledgement receipt',
        title: 'Acknowledgement Receipt',
        icon: <DescriptionIcon />,
      },
    ],
  },
  /* {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
    link: '/integrations', // Link for Integrations page
  }, */
];


// Create a custom theme with breakpoints
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#3f9152', // Custom primary color (Blue)
    },
    secondary: {
      main: '#ff4081', // Example secondary color (Pink)
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  }
});

// Page content component
function DemoPageContent({ pathname }) {
  
  if (pathname === '/inventory/bigrolls/buttrolls') {
    return <Inventory />
  }
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh', // Ensures full screen height
      }}
    >
      <PageContainer>
        {pathname}
      </PageContainer>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.node.isRequired,
};

// Main layout component
function DashboardLayoutBasic() {

  
  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
     session={session}
     authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        title: '',
        logo: <img src={Logo} alt="MPrez Scrap Trading Logo" style={{ maxWidth: '100%', marginTop: '4px' }} /> 
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', // Horizontal layout on large screens
          minHeight: '100vh', // Full viewport height
          width: '100%', // Full width
          overflow: 'hidden', // Prevent scrolling
          [demoTheme.breakpoints.up('lg')]: {
            flexDirection: 'row', // Keeps side-by-side on large screens
          },
          [demoTheme.breakpoints.down('md')]: {
            flexDirection: 'column', // Stack vertically on medium and smaller screens
          },
        }}
      >
        {/* Sidebar and content section */}
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </Box>
    </AppProvider>
  );
}

export default DashboardLayoutBasic;
