const isTouchDevice = () => {
  return 'ontouchstart' in window;
};

export { isTouchDevice };