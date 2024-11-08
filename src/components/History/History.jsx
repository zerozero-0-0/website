import React from "react";

// css
import "./History.css";

// img
import ChibaImg from "../../assets/Chiba.jpg";
import AtCoderImg from "../../assets/atcoder-black.png";
import dummyImg from "../../assets/dummy.png";

const History = () => {
  return (
    <div className="History">
      <div className="Header">
        <div className="frontfont">来歴</div>
        <div className="backfont">History</div>
      </div>
      <div className="contents">
        <table>
          <tr>
            <th className="time">2006. Jan</th>
            <th>千葉県に生まれる</th>
            <th>
              <img src={ChibaImg} />
            </th>
          </tr>
          <tr>
            <th className="time">2024. Apr</th>
            <th>埼玉大学 工学部 情報工学科に入学</th>
            <th>
              <img src={dummyImg} />
            </th>
          </tr>
          <tr>
            <th className="time">2024. Nov</th>
            <th>AtCoder で入茶</th>
            <th>
              <img src={AtCoderImg} />
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default History;