import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
  // aksiyonumuz fonksiyon ve parametreleri bunlardır.
  type: actionTypes.INCREASE_COUNTER,
  payload: 1, // Event türünün gönderilen datası gibi düşünebilirsin 1 kere gönderilicek yani.
});
export const decreaseCounter = () => ({
  // aksiyonumuz fonksiyon ve parametreleri bunlardır.
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});
export const increaseByTwoCounter = () => ({
  // aksiyonumuz fonksiyon ve parametreleri bunlardır.
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,
});
