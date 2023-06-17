import React from "react";
import YouTube from "react-youtube";
import styles from '../../styles/youtubeVideo.module.css';
import Link from 'next/link'
  
export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0,
      },
    };
    return (
      <div>
        <center>
         <p> Krátká a rychlá hra "Space Shooter", vytvořená k vyzkoušení znalostí Pythonu v knihovně pygame.
Zdrojový kód pro hru je opět na <a href="https://github.com/brychjakub/SpaceShooter.git">GitHubu</a>, tam naleznete i .rar s .exe souborem, pokud byste si chtěli hru zahrát.</p>
      <div className={styles.container}>
        <YouTube videoId="l8kt03E0U8o" 
            opts={opts} onReady={this._onReady} />
            </div>
            </center>
            <div className={styles.backToHome}>
          <Link href="/">← Zpět na hlavní stránku</Link>
        </div>
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
 
  

}
