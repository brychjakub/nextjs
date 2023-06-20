import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [position, setPosition] = useState({ left: "0", top: "10px" });
  const hoverCount = useRef(0);

  const handleMouseOver = () => {
    if (hoverCount.current < 4) {
      if (hoverCount.current === 3) {
        setPosition({ right: "0", bottom: "0" }); // position at the right lower corner
      } else {
        setPosition({
          left: `${Math.random() * 500}%`,
          top: `${Math.random() * 500}%`
        });
      }
      hoverCount.current += 1;
    }
  };

  const handleClick = () => {
    hoverCount.current = 0;
    setPosition({ left: "0", top: "10px" });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const linkVariants = {
    initial: { scale: 1 },
    hovered: { scale: 1.2 }
  };

  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Zdravíčko! Vítejte v mé ukázce Next.js a Reactu.</p>
        <p>
          Na místní a další práce a projekty se můžete ve větším detailu mrknout
          na mých stránkách vytvořených klasicky v HTML, CSS a JS a ve
          frameworku FLASK na mém hlavním portfoliu. Odkaz tam i na GitHub přímo
          na tento projekt najdete v zápatí stránky dole.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Výběrové projekty </h2>
        <ul className={utilStyles.list}>
          <div className={utilStyles.container}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{ display: "inline-block" }}
                className="link"
                variants={linkVariants}
                initial="initial"
                animate={isHovered ? "hovered" : "initial"}
                transition={{ duration: 0.5 }}
              >
                <li className={utilStyles.listItem}>
                  <Link href={`projects/volba`}>volba</Link>
                </li>
              </motion.div>
              {isHovered &&
                <motion.div
                  style={{ display: "inline-block", marginLeft: "30px" }}
                  className="link"
                  variants={linkVariants}
                  initial="initial"
                  animate="hovered"
                  transition={{ duration: 0.5 }}
                >
                  <li className={utilStyles.listItem}>
                    <Link href={`projects/volba`}>volba</Link>
                  </li>
                </motion.div>}
            </div>

            <div style={{ position: "relative", width: "50%", height: "auto" }}>
              <Link
                href="/projects/hra"
                className={utilStyles.link}
                style={position}
                onMouseOver={handleMouseOver}
                onClick={handleClick}
              >
                hra
              </Link>
            </div>
          </div>
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
