import Categories from './components/categories/Categories';
import ProductList from './components/categories/ProductList';
import Header from './components/header/index';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'normalize.css';

export const theme = createTheme({
components: {
  MuiGrid: {
    styleOverrides:{
      root: {
        display: 'flex',
        alignSelf: 'center'
      }
    }
  },
  MuiBox: {
    styleOverrides:{
      root: {
        display: 'flex',
        alignSelf: 'center',
        alignContent: 'center',
      }
    }
  }
},
  palette: {
    type: 'light',
    primary: {
      main: '#0b1425',
      dark: '#0b0f39',
      light: '#bbdefb',
    },
    secondary: {
      main: '#50716b',
      light: '#cfece7',
      dark: '#031c18',
    },
    background: {
      default: '#aee3fb',
      paper: '#e3f2fd',
    },
    divider: '#1e1e20',
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
      fontFamily: 'Montserrat',
    },
    h5: {
      fontWeight: 600,
      fontFamily: 'Montserrat',
    },
    h6: {
      fontWeight: 600,
      fontFamily: 'Montserrat',
    },
    subtitle1: {
      fontFamily: 'Montserrat',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
    },
    body1: {
      fontFamily: 'Montserrat',
    },
    body2: {
      fontFamily: 'Montserrat',
    },
    button: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    caption: {
      fontFamily: 'Montserrat',
    },
    overline: {
      fontFamily: 'Montserrat',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Categories />
        <ProductList />
      </ThemeProvider>
    </>
  )
}

export default App;
