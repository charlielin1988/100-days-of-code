const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 10;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 9;
      break;
    default:
      return 8;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

// console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('you got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      'you got ' +
        (actualSleepHours - idealSleepHours) +
        ' hour(s) more sleep than you need'
    );
  } else {
    console.log(
      'you got' +
        (idealSleepHours - actualSleepHours) +
        ' hour(s) less sleep than you need'
    );
  }
};
calculateSleepDebt();
