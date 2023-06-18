import Image from 'next/image'
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { FaDev, FaGithub, FaLinkedinIn } from 'react-icons/fa'


const name = 'Jakub Brych'
const imageUrls = ['tree.jpg', 'tree2.jpg', 'tree3.jpg', 'tree4.jpg', 'tree5.jpg', 'tree6.jpg','tree7.jpg'];
const transitionClassNames = {
  enter: styles.fadeEnter,
  enterActive: styles.fadeEnterActive,
  exit: styles.fadeExit,
  exitActive: styles.fadeExitActive,
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const siteTitle = 'Next.js portfolio'

export default function Layout({ children, home }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

 useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(Math.floor(Math.random() * imageUrls.length));
    }, 2000); 
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
        timeout={500}
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
      <footer className={styles.footer}>
      <div className={styles.footerContent}>

      <a
        href="https://brych.pythonanywhere.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
          <img src="/images/dog.ico" alt="Portfolio" className={styles.footerIcon} />

      </a>
      <a
        href="https://www.linkedin.com/in/jakub-brych-b4a06113b/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
        
      >
          <FaLinkedinIn /> 
      </a>
      <a
        href="https://github.com/brychjakub"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        <FaGithub />
        
      </a>
      </div>
      <div className={styles.imageContainer}>
          <CSSTransition
            in={true}
            timeout={500}
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
      </footer>
    </div>
    // add a footer with my linkedin and github and webpages
    

  );
}