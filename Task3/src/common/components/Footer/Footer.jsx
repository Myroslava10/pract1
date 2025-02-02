import styles from './Footer.module.scss';
import { FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'; // Імпорт іконок

const Footer = ({ className }) => (
    <footer className={`${className} ${styles.main_footer}`}>
        <div className={styles.footer_content}>
            <div className={styles.footer_links}>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy Policy</a>
            </div>

            <div className={styles.footer_social}>
                <a href="#" aria-label="Twitter">
                    <FaTwitter />
                </a>
                <a href="#" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="#" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
            </div>

            <div className={styles.footer_bottom}>
                <p>
                    Made with <FaHeart style={{ color: '#e74c3c' }} /> by{' '}
                    student | &copy; {new Date().getFullYear()} Flat UI Colors
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;