import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa";

export function LayoutRoot() {
  const [message, setMessage] = useState("Hello World");

  /**
   * Sets the MoTD to a new message
   *
   * @param {string} newMessage
   */
  function setMessageOfTheDay(newMessage) {
    setMessage(newMessage);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="text-white bg-purple-950">
        <p className="text-center">{message}</p>
      </section>

      <header className="flex items-center justify-between px-2 py-1 bg-rose-950 text-amber-50">
        <a
          href="/"
          className="transition-all hover:scale-105 hover:rotate-180 active:rotate-0"
        >
          <FaGalacticRepublic size={30} />
        </a>

        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="grow">
        <Outlet context={setMessageOfTheDay} />
      </div>

      <footer className="px-8 py-4 bg-rose-950 text-amber-50">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <a
              target="_blank"
              href="https://jobloop.no/"
              referrerPolicy="no-referrer"
            >
              <h2>Jobloop AS</h2>
            </a>
            <p className="text-sm text-center">Modul D</p>
          </div>

          <nav className="flex flex-col items-start">
            <h2 className="">Links</h2>
            <ul>
              <li>
                <a target="_blank" href="" referrerPolicy="no-referrer">
                  <FaGithubSquare size={30} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
