import styles from "./Home.module.css";
import Image from "next/image";
import logo from "../assets/logoExample.png";

export default function Home() {
  return (
    <main className={`${styles.main} min-h-screen flex`}>
      <header className={styles.header}>
        <div className={styles.interface}>
          <div className="logo">
            <a href="#">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </a>
          </div>

          <nav className="menu-desktop">
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Especialidades</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
            </ul>
          </nav>

          <div className="btn-contato">
            <a href="#">Contato</a>
          </div>
        </div>
      </header>
    </main>
  );
}
