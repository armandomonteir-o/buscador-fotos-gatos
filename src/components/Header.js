import React, { useEffect } from 'react';
import '../styles/Header.css';
import logoConversion from '../assets/logo-conversion.svg';

function Header() {
  useEffect(() => {
    const menuLinks = document.querySelectorAll('.nav-items a[href^="#"]');

    const getDistanceFromTheTop = (element) => {
      const id = element.getAttribute("href");
      return document.querySelector(id).offsetTop;
    };

    const smoothScrollTo = (endX, endY, duration = 400) => {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
      const distanceX = endX - startX;
      const distanceY = endY - startY;
      const startTime = new Date().getTime();

      const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
          return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
      };

      const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
          clearInterval(timer);
        }
        window.scroll(newX, newY);
      }, 1000 / 60);
    };

    const scrollToSection = (event, additionalOffset = 0) => {
      event.preventDefault();
      const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90 + additionalOffset;
      smoothScrollTo(0, distanceFromTheTop);
    };

    menuLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        if (event.target.href.endsWith("#service")) {
          scrollToSection(event, 50); 
        } else {
          scrollToSection(event);
        }
      });
    });

    return () => {
      menuLinks.forEach(link => {
        link.removeEventListener("click", scrollToSection);
      });
    };
  }, []); 

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logoConversion} alt="Logo Conversion"/> 
        </div>
        <div className="links">
          <ul className="nav-items">
            <li><a href="#search">Busca por gatos</a></li>
            <li><a href="#service">Conheça nossos serviços</a></li>
          </ul>
        </div>
        <div className="btn">
          <button className='meet'>Agendar Reunião</button>
        </div>
      </nav>
    </header>
  );
}
            
export default Header;

