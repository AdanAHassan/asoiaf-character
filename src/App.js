import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Content from "./Content"


const App = () => {

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <div style={{margin:"2rem, auto", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>A Song of Ice and Fire</h1>
        <Content
            />
        </div>
        </ThemeProvider>
    )
  }
  
  export default App 
 
