import clsx from "clsx";
import Fruit from "components/Fruit";
import React, { ReactElement } from "react";
import { IFruit } from "types";
import styles from "./FruitGallery.module.css";

interface Properties {
  fruits: IFruit[];
}
export default function FruitGallery({ fruits }: Properties): ReactElement {
  return (
    <div
      className={clsx(
        "w-full min-h-screen grid gap-2 place-content-center",
        styles.FruitGallery
      )}
    >
      {fruits.map((fruit) => (
        <Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} />
      ))}
    </div>
  );
}
