import { useMoTD } from "../hooks/useMoTD";
import { SwitchCSS } from "../components/SwitchCSS/SwitchCSS";
import { SwitchTailwind } from "../components/SwitchTailwind/SwitchTailwind";

export function MainPage() {
  useMoTD("We're on the Main Page");

  return (
    <main>
      <header>
        <h1>React Components</h1>
        <p>
          Here are two Swithches(toggles) from{" "}
          <a href="https://headlessui.com/" referrerPolicy="no-referrer">
            Headless UI
          </a>
        </p>
      </header>

      <section className="flex flex-col items-center min-h-screen px-4 py-8 border-b shadow-xl">
        <header>
          <h2 className="text-xl font-semibold text-center underline">
            Switch #1
          </h2>
          <p>Styled using CSS Modules</p>
        </header>

        <div className="py-8 grow">
          <div className="flex justify-center">
            <SwitchCSS />
          </div>
        </div>

        <footer>
          <p>
            Notes: Tailwind provides a set of User Stylesheet overrides. You
            will likely have to modify the CSS for this button to have it look
            the same without Tailwind CSS
          </p>
        </footer>
      </section>

      <section className="flex flex-col items-center min-h-screen px-4 py-8 shadow-xl">
        <header>
          <h2 className="text-xl font-semibold text-center underline">
            Switch #2
          </h2>
          <p>Styled with Tailwind CSS</p>
        </header>

        <div className="py-8 grow">
          <div className="flex justify-center">
            <SwitchTailwind />
          </div>
        </div>

        <footer>
          <a
            href="https://tailwindcss.com/docs/guides/vite"
            referrerPolicy="no-referrer"
          >
            Tailwind CSS
          </a>
        </footer>
      </section>
    </main>
  );
}
