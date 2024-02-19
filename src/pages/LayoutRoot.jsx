import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

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
    <div>
      <section>
        <p>Message of the Day: {message}</p>
      </section>

      <header>
        <p>Icon</p>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <Outlet context={setMessageOfTheDay} />
      </div>

      <footer>
        <p>Modul D</p>
      </footer>
    </div>
  );
}
