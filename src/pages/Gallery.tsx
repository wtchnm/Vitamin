import getFruits from "api/getFruits";
import Fruit from "components/Fruit";
import Head from "components/Head";
import LoadingOrError from "components/LoadingOrError";
import React, { ReactElement } from "react";
import { useQuery } from "react-query";

export default function GalleryPage(): ReactElement {
  const { isLoading, isError, error, data } = useQuery("fruits", getFruits);
  if (isLoading || isError) {
    return <LoadingOrError error={error as Error} />;
  }

  return (
    <>
      <Head title="Vitamin" />
      <div className="m-2 md:m-0 min-h-screen grid gap-2 place-content-center grid-cols-[minmax(0,384px)] md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]">
        {data?.map((fruit) => (
          <Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} />
        ))}
      </div>
    </>
  );
}
