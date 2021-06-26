import getFruits from "api/getFruits";
import BackIcon from "components/BackIcon";
import Head from "components/Head";
import ImageAttribution from "components/ImageAttribution";
import LoadingOrError from "components/LoadingOrError";
import React, { ReactElement } from "react";
import { useQuery } from "react-query";
import { Link, Redirect, RouteComponentProps } from "react-router-dom";

export default function DetailsPage({
  match,
}: RouteComponentProps<{ fruitName: string }>): ReactElement {
  const { isLoading, isError, error, data } = useQuery("fruits", getFruits);
  if (isLoading || isError) {
    return <LoadingOrError error={error as Error} />;
  }

  const { fruitName } = match.params;
  const fruit = data?.find(
    (f) => f.name.toLowerCase() === fruitName.toLowerCase()
  );
  if (!fruit) {
    return <Redirect to="/" />;
  }

  const isMobile = window.matchMedia("(min-width: 640px)").matches;
  const imageWidth =
    (isMobile ? window.innerWidth * 0.4 : window.innerWidth) *
    window.devicePixelRatio;
  const imageHeight =
    (isMobile ? window.innerHeight : window.innerHeight * 0.3) *
    window.devicePixelRatio;

  return (
    <>
      <Head title={fruit.name} />
      <div className="min-h-screen flex flex-col sm:flex-row items-center">
        <div className="relative">
          <img
            data-cy="FruitImage"
            width={imageWidth}
            height={imageHeight}
            style={{
              backgroundColor: fruit.image.color,
            }}
            src={`${fruit.image.url}&w=${imageWidth}&h=${imageHeight}`}
            alt={fruit.name}
          />
          <ImageAttribution author={fruit.image.author} />
        </div>
        <div className="my-8 sm:my-0 sm:ml-16">
          <Link data-cy="BackLink" to="/" className="flex items-center">
            <BackIcon />
            <span className="ml-4 text-xl">Back</span>
          </Link>

          <h1
            data-cy="FruitName"
            className="mt-2 sm:mt-8 text-6xl font-extrabold"
          >
            {fruit.name}
          </h1>
          <h2 className="mt-3 text-xl text-gray-500 dark:text-gray-400">
            Vitamins per 100 g (3.5 oz)
          </h2>
          <table className="mt-8 text-lg">
            <thead>
              <tr>
                <th className="px-4 py-2">Vitamin</th>
                <th className="px-4 py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {fruit.metadata.map(({ name, value }) => (
                <tr key={`FruitVitamin-${name}`} className="font-medium">
                  <td className="border border-gray-300 px-4 py-2">{name}</td>
                  <td className="border border-gray-300 px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
