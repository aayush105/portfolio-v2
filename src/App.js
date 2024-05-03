import React, {useState, Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/InfoSection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Project';
import ProjectDetails from './components/Project/ProjectDetails';


const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.74deg,
    rgba(204, 0, 187, 00.15) 0%,
    rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    38.74deg, 
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100% 
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 180%,30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Info />
          <Wrapper>
            <Skills />
            {/* <Achievement /> */}
            <Education />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
        </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App;
