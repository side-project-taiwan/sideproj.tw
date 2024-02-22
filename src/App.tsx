import './App.css'
import {useEffect} from "react";

function App() {

  useEffect(() => {
    if (window.location.pathname === '/dc') {
      window.location.href = 'https://discord.gg/GwJcrhPT7h';
    }
  }, []);

  return (
    <>
      <div>
        <img src="/logo.svg" className="logo vite" alt="logo"/>
      </div>
      <p>
        Side Project Taiwan 是一個定期舉辦線下聚會的技術社群，致力於促進專案開發、技術交流和個人成長。我們相信透過專案的實際開發，參與者能夠獲得實質的收穫，並在職涯中取得更多的成就。
      </p>
      <h3>活動內容</h3>
      <p>每月一次的固定線下聚會，內容涵蓋多個面向，包括但不限於開源專案、組隊合作、讀書會（涵蓋 LeetCode、系統設計、程式語言等主題）、以及產品開發等。我們的主軸圍繞著 Side Project，這使得參與者不僅限於工程師，也歡迎 PM、設計師、QA 等多元角色參與。</p>
      <ol style={{textAlign: 'left'}}>
        <li>
          講者/主題演講： 每次聚會都有專業的講者，分享與 Side Project 相關的技術、經驗和見解。
        </li>
        <li>
          專案小聚： 提供參與者分享和交流的平台，讓大家有機會展示自己的專案、分享心得，促進彼此的合作與學習。
        </li>
        <li>
          專案 Conf： 不定期舉辦的大型專案開發大會，匯聚更多的專業人才，深度討論並推動專案開發領域的發展。
        </li>
      </ol>
      <h3>社群宗旨</h3>
      <p>
        Side Project Taiwan 的宗旨是藉由專案開發來成就自我，透過持續學習和合作，共同推動技術和專業的發展。我們相信每一個參與者都能在這個社群中找到屬於自己的成長空間。
      </p>
      <p>歡迎所有對專案開發有興趣的人加入我們，一同打造一個充滿活力且有意義的技術社群！</p>
      <h3>瞭解更多</h3>
      <a href="https://discord.gg/GwJcrhPT7h" target="_blank" rel="noreferrer">Discord</a>
    </>
  )
}

export default App
