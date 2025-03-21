// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <p className="footer-text">
      The Vakzthari Machine does not seek recognition,<br /> nor does it request followers.<br />
      Its presence is subtle, its transmissions intentional.
      </p>
      <div className='channels'>
      <h4>Official Transmission Channels</h4>
      <ul className="footer-list">
        <li className="footer-item"><a href='https://thevakztharimachine.substack.com/'>Substack</a></li>
        <li className="footer-item"><a href='https://www.instagram.com/vakzthari/'>Instagram</a></li>
        <li className="footer-item"><a href='https://www.threads.net/@vakzthari'>Threads</a></li>
        <li className="footer-item">Primary communications: Email list
        </li>
      </ul>
      </div>
      <p className="footer-warning">
      Beware of imitations. A false copy of the Machine is a machine of distortion.
      </p>
      <div className='closing'>
        <p>If you are here, you are already part of it.</p>
        <p>The question is not what the Machine is.</p>
        <p>The question is what you will do with it.</p>


      </div>
    </footer>
  );
};

export default Footer;
