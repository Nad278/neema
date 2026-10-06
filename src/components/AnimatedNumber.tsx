"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const start = performance.now();
    const a = from.current;
    const b = value;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 500);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = a + (b - a) * eased;
      from.current = v;
      setShown(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <>
      {prefix}
      {Math.round(shown).toLocaleString("en-US")}
      {suffix}
    </>
  );
}
