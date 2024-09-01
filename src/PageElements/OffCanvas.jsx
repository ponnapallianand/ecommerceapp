import React, { useState } from 'react';
import './OffCanvas.css';
import Thumbnail1 from './Thumbnail1';

const menuData = [
  {
    title: 'Item 1',
    link: '#',
    subMenu: [
      { title: 'Sub-item 1.1', link: '#' },
      { title: 'Sub-item 1.2', link: '#' },
    ],
  },
  {
    title: 'Item 2',
    link: '#',
    subMenu: [
      { title: 'Sub-item 2.1', link: '#' },
      { title: 'Sub-item 2.2', link: '#' },
      { title: 'Sub-item 2.3', link: '#' },
      { title: 'Sub-item 2.4', link: '#' },
    ],
  },
  {
    title: 'Item 3',
    link: '#',
    subMenu: [
      { title: 'Sub-item 3.1', link: '#' },
      { title: 'Sub-item 3.2', link: '#' },
    ],
  },
  {
    title: 'Item 4',
    link: '#',
    subMenu: [],
  },
  // Add more items as needed
];

const OffCanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button className="offcanvas-toggle" onClick={toggleOffCanvas}>
        ☰
      </button>

      <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
        <br/><br/><br/><br/>
        <div className="offcanvas-body">
          <ul className="menu-list">
            {menuData.map((item, index) => (
              <li className="menu-item" key={index}>
                <a href={item.link}>{item.title}</a>
                {item.subMenu && item.subMenu.length > 0 && (
                  <ul className="sub-menu">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li className="sub-menu-item" key={subIndex}>
                        <a href={subItem.link}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleOffCanvas}></div>

      <div className={`body-content ${isOpen ? 'shifted' : ''}`}>
        <Thumbnail1 />
      </div>
    </div>
  );
};

export default OffCanvasMenu;
