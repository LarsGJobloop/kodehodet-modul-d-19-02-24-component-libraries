import { NavLink, Outlet } from "react-router-dom";

export function LayoutRoot() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between px-2 py-1 bg-rose-950 text-amber-50">
        <p>Icon</p>

        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="grow">
        <Outlet />
      </div>

      <footer className="px-2 py-4 bg-rose-950 text-amber-50">
        <p className="text-center">Kodehodet - Modul D</p>
      </footer>
    </div>
  );
}
