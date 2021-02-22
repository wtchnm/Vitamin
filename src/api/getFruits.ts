import { IFruit } from "types";

export default async function getFruits(): Promise<IFruit[]> {
  return (await fetch("/fruits.json")).json() as Promise<IFruit[]>;
}
