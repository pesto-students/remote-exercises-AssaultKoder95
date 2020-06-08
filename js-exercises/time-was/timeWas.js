const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;

function resultTimeUnit(timeDifference) {
  if (timeDifference < SECOND) return 'just now';

  if (timeDifference === SECOND) return 'second ago';
  if (timeDifference < MINUTE && timeDifference > SECOND) return 'seconds ago';

  if (timeDifference === MINUTE) return 'minute ago';
  if (timeDifference < HOUR && timeDifference > MINUTE) return 'minutes ago';

  if (timeDifference === HOUR) return 'hour ago';
  if (timeDifference < DAY && timeDifference > HOUR) return 'hours ago';

  if (timeDifference === DAY) return 'day ago';
  if (timeDifference < WEEK && timeDifference > DAY) return 'days ago';

  if (timeDifference === WEEK) return 'week ago';
  if (timeDifference < MONTH && timeDifference > WEEK) return 'weeks ago';

  if (timeDifference === MONTH) return 'month ago';
  if (timeDifference < YEAR && timeDifference > MONTH) return 'months ago';

  if (timeDifference === YEAR) return 'year ago';
  if (timeDifference > YEAR) return 'years ago';
}

const createCompleteTimestamp = (timeInMilliseconds, partialTimestamp, timePhase) =>
  `${Math.floor(timeInMilliseconds / timePhase)} ${partialTimestamp}`;

function timeWas(pastTimeInMilliseconds, currentTimeInMilliseconds) {
  let timeInMilliseconds;
  let timeDifference;

  if (!currentTimeInMilliseconds) {
    timeInMilliseconds = pastTimeInMilliseconds;
    timeDifference = Date.now() - timeInMilliseconds;
  } else {
    timeInMilliseconds = currentTimeInMilliseconds - pastTimeInMilliseconds;
    timeDifference = currentTimeInMilliseconds - pastTimeInMilliseconds;
  }

  const timePhaseObj = {
    second: SECOND,
    minute: MINUTE,
    hour: HOUR,
    day: DAY,
    week: WEEK,
    month: MONTH,
    year: YEAR,
  };

  const timePhases = Object.keys(timePhaseObj);
  const partialTimestamp = resultTimeUnit(timeDifference);

  if (partialTimestamp === 'just now') return partialTimestamp;

  let completeTimestamp = '';
  for (let i = 0; i < timePhases.length; i += 1) {
    if (partialTimestamp.includes(timePhases[i])) {
      completeTimestamp = createCompleteTimestamp(timeDifference, partialTimestamp, timePhaseObj[timePhases[i]]);
      break;
    }
  }

  return completeTimestamp;
}

export { timeWas };
