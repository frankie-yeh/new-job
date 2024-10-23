import React from 'react';
import '../App.css';
import Wrapper from './Base/Wrapper'; // 導入包裝組件
function AboutUs() {
  return (
    <div>
      <Wrapper>
        <div className="about-section">
          <div className="about-me-left">
            <h2>關於我</h2>
            <img src="../assets/images/subaru-logo.png"></img>
            <p>葉汶姍</p>
            <h2>學歷</h2>
            <p>北市康寧護理專校 | 資訊管理科 二專畢業</p>{' '}
          </div>
          <div className="about-me-right">
            <h2>經歷</h2>
            <p>智寶數位行銷有限公司 12年工作經歷</p>
            <p>職位：網頁工程師</p>
            <h2>前端技術</h2>
            <p>
              <ul>
                <li>精通HTML、CSS、JavaScript、RWD（響應式網站）開發能力</li>
                <li>WordPress開發和PHP、ASP網頁修改能力</li>
                <li>React.js開發和Git控版能力</li>
              </ul>
            </p>
            <h2>專案作品</h2>
            <p>555</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default AboutUs;
