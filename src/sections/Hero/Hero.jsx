import styles from './HeroStyles.module.css';
import prabhat_image from '../../assets/pra copy.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import leetcodeLight from'../../assets/lee.png';
import leetcodeDark from '../../assets/leet copy.webp';

import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const leetcode=theme==='light' ? leetcodeLight : leetcodeDark;
  
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={prabhat_image}
          className={styles.hero}
          alt="Profile picture of Prabhat Kumar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          
          I'm Prabhat
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://leetcode.com/u/prabhat15s/" target="_blank">
            <img src={leetcode} alt="Leetcode icon" />
          </a>
          <a href="https://github.com/prabhat1530" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/prabhat-kumar-9ba33925a/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Continuously learn and adapt to new frontend development frameworks, libraries, and tools.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
