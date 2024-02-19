import style from "./SwitchCSS.module.css";
import { Switch as HSwitch } from "@headlessui/react";
import { useState } from "react";

export function SwitchCSS() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={style.container}>
      <HSwitch
        checked={enabled}
        onChange={setEnabled}
        className={`${style.switch} ${enabled ? style.enabled : ""}`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${style.span} ${enabled ? style.enabled : ""}`}
        />
      </HSwitch>
    </div>
  );
}
