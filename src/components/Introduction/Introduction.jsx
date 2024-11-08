import React from "react";

// css
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="Header">
        <div className="frontfont">自己紹介</div>
        <div className="backfont"> Self-Introduction</div>
      </div>
      <br />
      <div className="textBox">
        私は
        <a
          href="https://www.saitama-u.ac.jp/engineering/"
          target="_blank"
          rel="noopener noreferrer"
          className="su"
        >
          埼玉大学工学部情報工学科
        </a>
        に所属しているぜろぜろ(Zerozero)です.
        <br />
        同大学プログラミングサークル
        <a
          href="https://maximum.vc/"
          target="_blank"
          rel="noopener noreferrer"
          className="atcoder"
        >
          maximum
        </a>
        で活動をしています.
        <br />
      </div>
      <br />
      <ul>
      現在は,
        <li>AtCoderで入緑(レーティング800以上)</li>
        <li>TOEIC スコア730</li>
        <li>様々なプログラミング言語の習得</li>
        <li>共同開発</li>
        <br />
      などを目指して活動を行っています．
      </ul>
    </div>
  );
};
export default Introduction;