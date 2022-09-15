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
import { Routes, Route } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Abril Fatface', 'cursive'
    ].join(','),
  },
  palette: {
    background: {
      paper: '#2C3333',
    },
    primary: {
      main: '#395B64',
    },
    secondary: {
      main: '#A5C9CA',
    },
    text: {
      primary: '#395B64',
      secondary: '#A5C9CA',
      tertiary: '#E7F6F2'
    }
  }
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/ABOUT" element={<AboutPage />} />
            <Route path="/SKILLS" element={<MySkills />} />
            <Route path="/CONTACT" element={<Contact />} />
          </Routes>
          <ContactSpeedDial />
        </Container>

      </ThemeProvider>
    </div>
  );
}

export default App;
