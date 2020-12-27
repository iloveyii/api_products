export class Time {
  static milliToMinHours(time) {
    return time
      ? new Date(time * 1000).toISOString().substr(11, 8)
      : padZero(randomBetween(1, 59)) + ":" + padZero(randomBetween(1, 59));
  }
}

export const randomBetween = (first, second) =>
  Math.floor(Math.random() * second) + first;

export const padZero = (number) => (number > 9 ? number : "0" + number);
