import React, { ReactElement, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { IFruit } from "types";
import ImageAttribution from "./ImageAttribution";

interface Properties {
  fruit: IFruit;
}
export default function Fruit({ fruit }: Properties): ReactElement {
  const history = useHistory();
  const onClick = useCallback(
    (event: React.SyntheticEvent<HTMLElement, Event>) => {
      if (
        event.defaultPrevented ||
        (event.target as HTMLElement).nodeName === "A"
      ) {
        return;
      }

      history.push(fruit.name.toLowerCase());
    },
    [fruit.name, history]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter") {
        onClick(event);
      }
    },
    [onClick]
  );

  const imageWidth = Math.min(384, window.innerWidth);
  const imageHeight = imageWidth / (16 / 9);

  return (
    <div
      className="select-none focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-gray-500 focus:border-gray-300 cursor-pointer overflow-hidden shadow-lg rounded-lg"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <div className="relative">
        <img
          loading="lazy"
          width={imageWidth}
          height={imageHeight}
          style={{
            backgroundColor: fruit.image.color,
          }}
          src={`${fruit.image.url}&w=${
            imageWidth * window.devicePixelRatio
          }&h=${imageHeight * window.devicePixelRatio}`}
          alt={fruit.name}
        />
        <ImageAttribution author={fruit.image.author} />
      </div>
      <h3 className="p-6 font-bold text-xl">{fruit.name}</h3>
    </div>
  );
}
