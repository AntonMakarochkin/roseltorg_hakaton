import { subMinutes } from "date-fns";

const getRandomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export function getRandomArray(from: number, to: number) {
  return [...Array(130)]
    .map((_, index) => {
      return [subMinutes(new Date(), index).getTime(), getRandomValue(from, to)];
    })
    .reverse();
}
