import { workerData } from "worker_threads";

let permutate = (str, result = [], stash = []) => {
  if (!str) {
    stash.push(result);
  }

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    permutate(str.slice(0, i) + str.slice(i + 1), result, stash);
    result = result.slice(0, result.length - 1);
  }

  return [...new Set(stash)];
};

export function allPossibleOutComes(str) {
    return permutate(str);
}