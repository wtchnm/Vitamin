import getFruits from "api/getFruits";
import clsx from "clsx";
import DocumentTitle from "components/DocumentTitle";
import Fruit from "components/Fruit";
import LoadingOrError from "components/LoadingOrError";
import React, { ReactElement } from "react";
import { useQuery } from "react-query";
import styles from "./FruitGallery.module.css";

export default function FruitGallery(): ReactElement {
  const { isLoading, isError, error, data } = useQuery("fruits", getFruits);
  if (isLoading || isError) {
    return <LoadingOrError error={error as Error} />;
  }

  return (
    <>
      <DocumentTitle>Vitamin</DocumentTitle>
      <div
        className={clsx(
          "m-2 md:m-0 min-h-screen grid gap-2 place-content-center",
          styles.FruitGallery
        )}
      >
        {data?.map((fruit) => (
          <Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} />
        ))}
      </div>
    </>
  );
}
