import palettesData from "../../../data/pallete.json";
import Palette from "../../components/Palette/Palette";

import styles from "./HomePage.module.scss";

const HomePage = () => (
  <main className={styles.home}>
    <div className={styles.paletteList}>
      {palettesData.map((pallet) => (
        <Palette key={pallet.id} {...pallet}/>
      ))}
    </div>
  </main>
);

export default HomePage;
