import styles from "./Home.module.css";
import Image from "next/image";
import logo from "../assets/logoExample.png";
import hero from "../assets/hero.png";

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

          <div className={styles.menuWrapper}>
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

            <div className={styles.btnContato}>
              <a href="#">Contato</a>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroWrapper}>
          <div className={styles.imgHero}>
            <Image
              src={hero}
              alt="Imagem profissional"
              width={550}
              height={550}
            />
          </div>

          <div className={styles.textHero}>
            <h1>
              Olá, eu sou <span>Matheus!</span>
            </h1>
            <p>
              Desenvolvedor apaixonado por criar experiências digitais
              incríveis.
            </p>

            <a href="#" className={styles.btnContato}>
              <button>Vamos conversar!</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
