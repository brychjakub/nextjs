import { motion } from 'framer-motion';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const name = 'Jakub Brych';
export const siteTitle = 'Next.js portfolio';

export default function Layout({ children, home }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const fadeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };


  const slideInVariants = {
    hidden: {
      x: '100%',
    },
    visible: {
      x: '0%',
      transition: {
        duration: 0.5,
        type: 'tween',
      },
    },
  };

  
  const slideInFromLeftVariants = {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: '0%',
      transition: {
        duration: 0.5,
        type: 'tween',
      },
    },
  };

  return (
    <div className={styles.container}>
        {home ? (
             <motion.div
             className={styles.header}
             initial="hidden"
             animate={isMounted ? 'visible' : 'hidden'}
             variants={fadeVariants}
           >
                   <header className={styles.header}>

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
            </header>
            </motion.div>


        ) : (
          <>
         
            
            <motion.div
        className={styles.navbar}
        initial="hidden"
        animate={isMounted ? 'visible' : 'hidden'}
        variants={slideInFromLeftVariants}
      >
        <div className={styles.navbar}>
              <Link className={styles.navbarLink} href="/">
                <img
                  src="/images/arrow.png"
                  alt="Portfolio"
                  className={styles.headerIcon}
                />
              </Link>

              <Link href="/projects/hra" className={styles.navbarLink}>
                <img
                  src="/images/spaceship.png"
                  alt="Portfolio"
                  className={styles.headerIcon}
                />
              </Link>
              <Link href="/projects/volba" className={styles.navbarLink}>
                <img
                  src="/images/decision.png"
                  alt="Portfolio"
                  className={styles.headerIcon}
                />
              </Link>
              </div>

              </motion.div>

          </>
        )}

        <center>
          
        <motion.main
        className={styles.content}
        initial="hidden"
        animate={isMounted ? 'visible' : 'hidden'}
        variants={fadeVariants}
      >
        {children}
      </motion.main>
        </center>

      <motion.footer
        className={styles.footer}
        initial="hidden"
        animate={isMounted ? 'visible' : 'hidden'}
        variants={slideInVariants}
      >
        <div className={styles.footerContent}>
          <a
            href="https://brych.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <img
              src="/images/dog.ico"
              alt="Portfolio"
              className={styles.footerIcon}
            />
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
            href="https://github.com/brychjakub/nextjs.git"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <FaGithub />
          </a>
        </div>
      </motion.footer>
    </div>
  );
}
