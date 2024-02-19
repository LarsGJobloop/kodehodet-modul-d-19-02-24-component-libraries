import { useMoTD } from "../hooks/useMoTD";

export function MainPage() {
  useMoTD("We're on the Main Page");

  return (
    <main>
      <h1>React Components</h1>
    </main>
  );
}
