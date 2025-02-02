import styles from './Header.module.scss';

const Header = ({ className }) => (
    <header className={`${className} ${styles.main_header}`}>
        <h2>Flat UI Colors</h2>
    </header>
);

export default Header;