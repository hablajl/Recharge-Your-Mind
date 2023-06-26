// 1
const remainingDaysInYear = () => {
  const today = new Date();
  const endOfYear = new Date(
    today.getFullYear(),
    11,
    31
  );
  const difference = endOfYear.getTime() - today.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const remainingDaysInYear = Math.ceil(difference / oneDay);
  return remainingDaysInYear;
}

// 2
const getHoursOfSleep = (averageHours) => {
  const remainingDays = remainingDaysInYear();
  const totalHours = remainingDays * averageHours;
  return totalHours;
}

// 3
const getNumberOfBreaks = (averageHours) => {
  const totalHours = getHoursOfSleep(averageHours);
  const numberOfBreaks = totalHours / 90;
  return Math.ceil(numberOfBreaks);
}

// 4
const countDownToBreak = (numberOfBreaks) => {
  for (let i = 1; i < numberOfBreaks; i++) {
    setTimeout(() => {
      console.log(`${i} break left!`);
    }, i * 90 * 1000);
  }
}

// 5
const rechargeYourMind = () => {
  const averageHours = 8;
  const numberOfBreaks = getNumberOfBreaks(averageHours);
  if (numberOfBreaks > 0) {
    console.log(`You need to take ${numberOfBreaks} breaks in the year.`);
    countDownToBreak(numberOfBreaks);
  }
}

// 6
const getCaloriesToBurn = (exercisePerDay, minutesPerDay, requiredCalories) => {
  const remainingDays = remainingDaysInYear();
  const totalCalories = exercisePerDay * remainingDays * minutesPerDay * 0.0175;
  return Math.max(requiredCalories - totalCalories, 0);
}

// 7
const workoutPlan = () => {
  const requiredCalories = 3000;
  const exercisePerDay = 10;
  const minutesPerDay = 30;
  const caloriesToBurn = getCaloriesToBurn(exercisePerDay, minutesPerDay, requiredCalories);
  console.log(`You need to burn ${caloriesToBurn} calories.`);
  console.log('Let\'s get started!');
}

// 8
const getNumberOfBooks = (pagesPerDay, requiredPages) => {
  const remainingDays = remainingDaysInYear();
  const totalPages = remainingDays * pagesPerDay;
  return Math.max(requiredPages - totalPages, 0);
}

// 9
const readingPlan = () => {
  const requiredPages = 1000;
  const pagesPerDay = 20;
  const numberOfBooks = getNumberOfBooks(pagesPerDay, requiredPages);
  console.log(`You need to finish ${numberOfBooks} books.`);
  console.log('Let\'s get started!');
}

// 10
const getNumberOfActivites = (activitesPerDay, requiredActivites) => {
  const remainingDays = remainingDaysInYear();
  const totalActivites = remainingDays * activitesPerDay;
  return Math.max(requiredActivites - totalActivites, 0);
}

// 11
const activitiesPlan = () => {
  const requiredActivites = 30;
  const activitesPerDay = 5;
  const numberOfActivites = getNumberOfActivites(activitesPerDay, requiredActivites);
  console.log(`You need to complete ${numberOfActivites} activities.`);
  console.log('Let\'s get started!');
}

// 12
const getNumberOfWeeks = (hoursPerWeek, requiredHours) => {
  const remainingDays = remainingDaysInYear();
  const totalHours = remainingDays * hoursPerWeek;
  return Math.max(requiredHours - totalHours, 0);
}

// 13
const learningPlan = () => {
  const requiredHours = 100;
  const hoursPerWeek = 10;
  const numberOfWeeks = getNumberOfWeeks(hoursPerWeek, requiredHours);
  console.log(`You need to study for ${numberOfWeeks} weeks.`);
  console.log('Let\'s get started!');
}

// 14
const reduceScreenTime = (hoursPerDay) => {
  if (hoursPerDay > 2) {
    const totalHours = remainingDaysInYear() * (hoursPerDay - 2);
    console.log(`Reduce your screen time by ${totalHours} hours.`);
  }
  console.log('Let\'s get started!');
}

// 15
const getNumberOfProjects = (projectsPerDay, requiredProjects) => {
  const remainingDays = remainingDaysInYear();
  const totalProjects = remainingDays * projectsPerDay;
  return Math.max(requiredProjects - totalProjects, 0);
}

// 16
const projectsPlan = () => {
  const requiredProjects = 10;
  const projectsPerDay = 2;
  const numberOfProjects = getNumberOfProjects(projectsPerDay, requiredProjects);
  console.log(`You need to complete ${numberOfProjects} projects.`);
  console.log('Let\'s get started!');
}

// 17
const getNumberOfVacations = (daysPerVacation, requiredDays) => {
  const remainingDays = remainingDaysInYear();
  const totalVacations = remainingDays / daysPerVacation;
  return Math.max(requiredDays - totalVacations, 0);
}

// 18
const vacationsPlan = () => {
  const requiredDays = 10;
  const daysPerVacation = 5;
  const numberOfVacations = getNumberOfVacations(daysPerVacation, requiredDays);
  console.log(`You need to take ${numberOfVacations} vacations.`);
  console.log('Let\'s get started!');
}

// 19
const getNumberOfRestDays = (requiredDays) => {
  const remainingDays = remainingDaysInYear();
  return Math.max(requiredDays - remainingDays, 0);
}

// 20
const restPlan = () => {
  const requiredDays = 30;
  const numberOfRestDays = getNumberOfRestDays(requiredDays);
  console.log(`You need to rest for ${numberOfRestDays} days.`);
  console.log('Let\'s get started!');
}

// 21
const getNumberOfMeditationSessions = (sessionsPerDay, requiredSessions) => {
  const remainingDays = remainingDaysInYear();
  const totalSessions = remainingDays * sessionsPerDay;
  return Math.max(requiredSessions - totalSessions, 0);
}

// 22
const meditationPlan = () => {
  const requiredSessions = 300;
  const sessionsPerDay = 2;
  const numberOfMeditationSessions = getNumberOfMeditationSessions(sessionsPerDay, requiredSessions);
  console.log(`You need to meditate for ${numberOfMeditationSessions} sessions.`);
  console.log('Let\'s get started!');
}

// 23
const getNumberOfGames = (minutesPerDay, requiredMinutes) => {
  const remainingDays = remainingDaysInYear();
  const totalMinutes = remainingDays * minutesPerDay;
  return Math.max(requiredMinutes - totalMinutes, 0);
}

// 24
const gamesPlan = () => {
  const requiredMinutes = 1000;
  const minutesPerDay = 60;
  const numberOfGames = getNumberOfGames(minutesPerDay, requiredMinutes);
  console.log(`You need to play ${numberOfGames} games.`);
  console.log('Let\'s get started!');
}

// 25
const getNumberOfHobbies = (hobbiesPerDay, requiredHobbies) => {
  const remainingDays = remainingDaysInYear();
  const totalHobbies = remainingDays * hobbiesPerDay;
  return Math.max(requiredHobbies - totalHobbies, 0);
}

// 26
const hobbiesPlan = () => {
  const requiredHobbies = 10;
  const hobbiesPerDay = 1;
  const numberOfHobbies = getNumberOfHobbies(hobbiesPerDay, requiredHobbies);
  console.log(`You need to pick up ${numberOfHobbies} hobbies.`);
  console.log('Let\'s get started!');
}

// 27
const getNumberOfVolunteeringDays = (requiredDays) => {
  const remainingDays = remainingDaysInYear();
  return Math.max(requiredDays - remainingDays, 0);
}

// 28
const volunteeringPlan = () => {
  const requiredDays = 10;
  const numberOfVolunteeringDays = getNumberOfVolunteeringDays(requiredDays);
  console.log(`You need to volunteer for ${numberOfVolunteeringDays} days.`);
  console.log('Let\'s get started!');
}

// 29
const getNumberOfLongWalks = (longWalksPerDay, requiredLongWalks) => {
  const remainingDays = remainingDaysInYear();
  const totalLongWalks = remainingDays * longWalksPerDay;
  return Math.max(requiredLongWalks - totalLongWalks, 0);
}

// 30
const longWalksPlan = () => {
  const requiredLongWalks = 10;
  const longWalksPerDay = 1;
  const numberOfLongWalks = getNumberOfLongWalks(longWalksPerDay, requiredLongWalks);
  console.log(`You need to take ${numberOfLongWalks} long walks.`);
  console.log('Let\'s get started!');
}

// 31
const getNumberOfCircuits = (circuitsPerDay, requiredCircuits) => {
  const remainingDays = remainingDaysInYear();
  const totalCircuits = remainingDays * circuitsPerDay;
  return Math.max(requiredCircuits - totalCircuits, 0);
}

// 32
const circuitsPlan = () => {
  const requiredCircuits = 1000;
  const circuitsPerDay = 10;
  const numberOfCircuits = getNumberOfCircuits(circuitsPerDay, requiredCircuits);
  console.log(`You need to complete ${numberOfCircuits} circuits.`);
  console.log('Let\'s get started!');
}

// 33
const getNumberOfQiGongPractices = (practicesPerDay, requiredPractices) => {
  const remainingDays = remainingDaysInYear();
  const totalPractices = remainingDays * practicesPerDay;
  return Math.max(requiredPractices - totalPractices, 0);
}

// 34
const qiGongPlan = () => {
  const requiredPractices = 365;
  const practicesPerDay = 1;
  const numberOfQiGongPractices = getNumberOfQiGongPractices(practicesPerDay, requiredPractices);
  console.log(`You need to practice Qigong for ${numberOfQiGongPractices} days.`);
  console.log('Let\'s get started!');
}

// 35
const getNumberOfStretches = (stretchesPerDay, requiredStretches) => {
  const remainingDays = remainingDaysInYear();
  const totalStretches = remainingDays * stretchesPerDay;
  return Math.max(requiredStretches - totalStretches, 0);
}

// 36
const stretchesPlan = () => {
  const requiredStretches = 30;
  const stretchesPerDay = 2;
  const numberOfStretches = getNumberOfStretches(stretchesPerDay, requiredStretches);
  console.log(`You need to stretch for ${numberOfStretches} days.`);
  console.log('Let\'s get started!');
}

// 37
const getNumberOfJogs = (jogsPerDay, requiredJogs) => {
  const remainingDays = remainingDaysInYear();
  const totalJogs = remainingDays * jogsPerDay;
  return Math.max(requiredJogs - totalJogs, 0);
}

// 38
const jogsPlan = () => {
  const requiredJogs = 10;
  const jogsPerDay = 1;
  const numberOfJogs = getNumberOfJogs(jogsPerDay, requiredJogs);
  console.log(`You need to go for ${numberOfJogs} jogs.`);
  console.log('Let\'s get started!');
}

// 39
const getNumberOfYogaPractices = (practicesPerDay, requiredPractices) => {
  const remainingDays = remainingDaysInYear();
  const totalPractices = remainingDays * practicesPerDay;
  return Math.max(requiredPractices - totalPractices, 0);
}

// 40
const yogaPlan = () => {
  const requiredPractices = 50;
  const practicesPerDay = 3;
  const numberOfYogaPractices = getNumberOfYogaPractices(practicesPerDay, requiredPractices);
  console.log(`You need to practice Yoga for ${numberOfYogaPractices} days.`);
  console.log('Let\'s get started!');
}

// 41
const getNumberOfLeisureActivities = (activitiesPerDay, requiredActivites) => {
  const remainingDays = remainingDaysInYear();
  const totalActivites = remainingDays * activitiesPerDay;
  return Math.max(requiredActivites - totalActivites, 0);
}

// 42
const leisureActivitiesPlan = () => {
  const requiredActivites = 20;
  const activitiesPerDay = 1;
  const numberOfLeisureActivities = getNumberOfLeisureActivities(activitiesPerDay, requiredActivites);
  console.log(`You need to do ${numberOfLeisureActivities} leisure activities.`);
  console.log('Let\'s get started!');
}

// 43
const getNumberOfExercises = (exercisesPerDay, requiredExercises) => {
  const remainingDays = remainingDaysInYear();
  const totalExercises = remainingDays * exercisesPerDay;
  return Math.max(requiredExercises - totalExercises, 0);
}

// 44
const exercisePlan = () => {
  const requiredExercises = 30;
  const exercisesPerDay = 5;
  const numberOfExercises = getNumberOfExercises(exercisesPerDay, requiredExercises);
  console.log(`You need to do ${numberOfExercises} exercises.`);
  console.log('Let\'s get started!');