import React from 'react';
import { Link } from 'react-router-dom';

export default function MonthArtist() {
  return (
    <div className="artMonth">
      <h2>이 달의 작가</h2>
      <div className="artistInfo">
        {' '}
        <img
          className="artistPhoto"
          src="images/artist_img/artist1.webp"
          alt="artist"
        ></img>
        <div className="artistComment">
          <h2>작가 comment</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            architecto illum minus ratione tenetur corrupti ipsa, dolore
            officiis eveniet cum voluptate numquam. Odit unde eum modi quia
            possimus pariatur fuga!
          </p>
          <ul className="artMonthList">
            <li>
              <Link to="/">
                <img src="images/art_img/img4.webp"></img>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="images/art_img/img5.webp"></img>
              </Link>
            </li>{' '}
            <li>
              <Link to="/">
                <img src="images/art_img/img6.webp"></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
