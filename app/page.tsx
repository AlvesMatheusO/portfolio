import Image from "next/image";
import logo from "../assets/logoExample.png";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <header>
        <div className="interface">
          <div className="logo">
            <a href="#">
              <Image 
                src={logo}
                alt="Logo"
                width={120}
                height={120}
              />
            </a>
          </div>

          <nav className="menu-desktop">
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Especialidades</a></li>
              <li><a href="#">Projetos</a></li>
              <li><a href="#">Contato</a></li>
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
