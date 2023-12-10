import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsPast = (now.getTime() - createdAt.getTime()) / 1000;

  if (secondsPast < 60) {
    return Math.round(secondsPast) + " seconds ago";
  }

  const minutesPast = secondsPast / 60;
  if (minutesPast < 60) {
    return Math.round(minutesPast) + " minutes ago";
  }

  const hoursPast = minutesPast / 60;
  if (hoursPast < 24) {
    return Math.round(hoursPast) + " hours ago";
  }

  const daysPast = hoursPast / 24;
  if (daysPast < 7) {
    return Math.round(daysPast) + " days ago";
  }

  const weeksPast = daysPast / 7;
  if (weeksPast < 5) {
    return Math.round(weeksPast) + " weeks ago";
  }

  const monthsPast = daysPast / 30;
  if (monthsPast < 12) {
    return Math.round(monthsPast) + " months ago";
  }

  const yearsPast = daysPast / 365;
  return Math.round(yearsPast) + " years ago";
};

export function formatNumberShort(num: number): string {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol
    : "0";
}
