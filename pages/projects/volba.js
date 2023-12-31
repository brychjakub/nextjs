import React from "react";
import YouTube from "react-youtube";
import styles from '../../styles/youtubeVideo.module.css';
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Layout from "../../components/layout";

  
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
      <Layout>
      <div className={utilStyles.headingMd}>
      <img src="/images/decision.png" alt="Portfolio" className={utilStyles.emoji}/>

        <center>

         <p> Původně psané v Excelu pro lokální přístupnost, nakonec ale převedený program do webového prostředí za pomoci JS, HTML a CSS. Takto mohou své výsledky všichni zjistit hned po dokončení práce. Zdrojový kód je opět na <a href="https://github.com/brychjakub/psychoFinal">GitHubu</a> a na <a href="https://brych.pythonanywhere.com/psychologie.html">mých stránkách</a> se můžete podívat na celý projekt.</p>
      <div className={styles.container}>
        <YouTube videoId="wMJcaxWN2sg" 
            opts={opts} onReady={this._onReady} />
            </div>
            </center>
           
      </div>
      </Layout>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
 
  

}
