import * as React from 'react'

export const rnd = (m: number, n: number) => {
  return Math.floor(Math.random() * (n - m + 1)) + m
}
export const getWeightedRandomInt =
  (min: number, max: number, weightMin: number, weightMax: number) => {
    const rand = rnd(min, max)
    const weight = rnd(weightMin, weightMax)
    return rand + weight / 2
  }
