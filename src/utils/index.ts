import moment from 'moment';

const isTouchDevice = () => {
  return 'ontouchstart' in window;
};

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randFloat(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

const formatDuration = (startDate: string, endDate: string) => {
  const duration = moment.duration(moment(endDate).diff(moment(startDate)));

  if (duration.asMinutes() < 60) {
    return `${Math.floor(duration.asMinutes())} minutes`;
  } else if (duration.asHours() < 24) {
    return `${Math.floor(duration.asHours())} hours`;
  } else if (duration.asDays() < 30) {
    return `${Math.floor(duration.asDays())} days`;
  } else if (duration.asMonths() < 12) {
    return `${Math.floor(duration.asMonths())} months`;
  } else {
    return `${Math.floor(duration.asYears())} years`;
  }
};

function randomCantWaitButtonText() {
  const buttonTexts = [
    "I'm Ready for the Reveal! 🎉",
    'Eagerly Awaiting Updates! 🔥',
    "I Can't Wait to See It! 🤩",
    'Sign Me Up for Updates! 📝',
    'Keep Me Posted! 📝',
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

export {
  isTouchDevice,
  randInt,
  randFloat,
  randomCantWaitButtonText,
  formatDuration,
};
