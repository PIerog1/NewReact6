import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Tooltip from "./components/Tooltip";
import PageLayout from "./components/PageLayout";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";

function App() {
  return (
    <>
    <h2>Zadanie 6.3</h2>
    <div style={{ padding: "50px" }}>
      <Tooltip hint="Zapisz zmiany">
        <button>Zapisz</button>
      </Tooltip>
    </div>
    <h2>Zadanie 6.4</h2>
    <PageLayout
      sidebar={
        <Sidebar>
          <h2>Nawigacja</h2>

          <nav>
            <ul>
              <li><a href="#">Strona główna</a></li>
              <li><a href="#">Artykuły</a></li>
              <li><a href="#">Kategorie</a></li>
              <li><a href="#">Kontakt</a></li>
            </ul>
          </nav>
        </Sidebar>
      }
      content={
        <ContentArea>
          <article>
            <h2>React</h2>

            <p>
             dhawbdajkbdhajkdadabkjda
            </p>

            <p>
              dhjwabduhiabdauidbauda
            </p>

            <p>
             wdiawidnjaidnadainda
            </p>
          </article>
        </ContentArea>
      }
    />
    </>
  );
}

export default App;