import Head from 'next/head'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


const name = 'Jakub Brych'
const imageUrls = ['tree.jpg', 'tree2.jpg', 'tree3.jpg', 'tree4.jpg', 'tree5.jpg', 'tree6.jpg','tree7.jpg'];
const transitionClassNames = {
  enter: styles.fadeEnter,
  enterActive: styles.fadeEnterActive,
  exit: styles.fadeExit,
  exitActive: styles.fadeExitActive,
};
export const siteTitle = 'Next.js portfolio'

export default function Layout({ children, home }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

 useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(Math.floor(Math.random() * imageUrls.length));
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };
  const currentImage = imageUrls[currentIndex];

  return (
    
    <div className={styles.container}>
      
      <header className={styles.header}>
    {home ? (
      <CSSTransition
        in={true}
        timeout={300}
        classNames="fade"
        appear={true}
        unmountOnExit
      >
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      </CSSTransition>
    ) : (
      <>
            <div className={styles.backToHome}>
              <Link href="/">← Zpět na hlavní stránku</Link>
            </div>
            <div className={styles.imageContainer}>
          <CSSTransition
            in={true}
            timeout={300}
            classNames={transitionClassNames}
            appear
            unmountOnExit
          >
            <div className={styles.imageWrapper}>
              <Image
                priority
                src={`/images/${currentImage}`}
                className={`${utilStyles.borderCircle} ${isTransitioning ? styles.fade : ''}`}
                height={144}
                width={144}
                alt={name}
                onTransitionEnd={handleTransitionEnd}
              />
            </div>
          </CSSTransition>
        </div>
            
          </>
        )}
      </header>
      <CSSTransition
        in={true}
        timeout={300}
        classNames="fade"
        appear
        unmountOnExit
      >
      <center>
      <main>
        {children}
       
      </main>
      </center>
      </CSSTransition>
    </div>
  );
}