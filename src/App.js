import './App.css';
// import Trial from './Trial';
import Header from './components/common/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Content from './components/home/Content';
import ContactSpeedDial from './components/common/ContactSpeedDial';
import AboutPage from './components/about/AboutPage';
import Contact from './components/contact/Contact';
import { Container } from '@mui/material';
import MySkills from './components/skills/MySkills';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Abril Fatface', 'cursive'
    ].join(','),
  },
  palette: {
    background: {
      paper: '#2C3333', //'#1B262C',
    },
    primary: {
      main: '#395B64',
    },
    secondary: {
      main: '#A5C9CA',
    },
    text: {
      primary: '#395B64', //'#0F4C75',
      secondary: '#A5C9CA',//#3282B8',
      tertiary: '#E7F6F2'//#BBE1FA'
    }
  }
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">

          <Header />
          <Content />
          <ContactSpeedDial />
          <AboutPage />
          <MySkills />
          <Contact />

        </Container>

      </ThemeProvider></div>
  );
}

export default App;
