import React, { ReactElement, useMemo } from "react";

export default function App(): ReactElement {
  const temperature = useMemo(
    () => (Math.random() * (104 - 86) + 86).toFixed(1),
    []
  );

  return (
    <p className="text-center text-6xl">
      It&apos;s hot here! {temperature}° fahrenheit.
    </p>
  );
}
