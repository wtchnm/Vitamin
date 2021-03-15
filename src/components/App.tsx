import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoadingOrError from "./LoadingOrError";

const FruitDetails = lazy(() => import("./FruitDetails"));
const FruitGallery = lazy(() => import("./FruitGallery"));

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Switch>
          <Route exact path="/" component={FruitGallery} />
          <Route path="/:fruitName" component={FruitDetails} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
