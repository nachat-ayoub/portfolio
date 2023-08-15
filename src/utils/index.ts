const isTouchDevice = () => {
  return 'ontouchstart' in window;
};

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { isTouchDevice, randInt };
