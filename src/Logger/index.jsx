import styles from "./styles.module.css";

import { useEffect, useRef } from "react";

export default function Logger() {
  const ref = useRef();
  useEffect(() => {
    ref.current.classList.remove(styles.logger);
    ref.current.offsetWidth; // layout thrashing
    ref.current.classList.add(styles.logger);
  });
  return (
    <div ref={ref} className={styles.logger}>
      {Date.now()}
    </div>
  );
}
