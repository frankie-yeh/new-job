import React from 'react';
import '../styles/Footer.css'; // 確保引入了 CSS 文件

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-logo">
        <img src='../assets/images/footer-car-logo.png' alt="Logo" />
      </div>
      <div className="footer-map">
        {/* 替換這裡的 iframe 代碼為你實際的地圖嵌入代碼 */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092883!2d144.95373631531882!3d-37.81627917975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d1a5f9d1c6d!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1630648041925!5m2!1sen!2sus"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
      <div className="footer-contact">
        <h2>Contact</h2>
        <p>Phone / +80 999 99 9999</p>
        <p>Email / info@domain.com</p>
        <p>Studio / Moonshine St. 14/05 Light City</p>
        <p>Copyright 2024 - React Designed by Frankie</p>
      </div>
    </div>
  );
}

export default Footer;
