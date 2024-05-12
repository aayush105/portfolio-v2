import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

export const Button = styled.div`
  position: fixed;
  width: 50px; 
  right: 5%;
  bottom: 40px;
  height: 50px;
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;
  color: white;
  transform: translateX(-50%);
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? 'block' : 'none' }}
      />
    </Button>
  );
};

export default ScrollButton;
