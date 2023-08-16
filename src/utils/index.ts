const isTouchDevice = () => {
  return 'ontouchstart' in window;
};

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randFloat(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

function randomCantWaitButtonText() {
  const buttonTexts = [
    "I Can't Wait to See It! 🤩",
    'Count me in for updates! 📬',
    'Eagerly Awaiting Updates! 🔥',
    'Keep Me Posted! 📝',
    "I'm Ready for the Reveal! 🎉",
    'Excitedly Anticipating! 🤗',
    "Notify Me When It's Ready! 🛎️",
    'Anticipation Mode: ON! 🚀',
    'Looking Forward to It! 🤓',
    'Stay Tuned with Me! 🎵',
    "I'm Curious, Keep Me Informed! 🧐",
    'Ready to Discover the Excitement! 🌟',
  ];

  return buttonTexts[randInt(0, buttonTexts.length - 1)];
}

export { isTouchDevice, randInt, randFloat, randomCantWaitButtonText };
