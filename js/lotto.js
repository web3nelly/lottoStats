import megaMillionsDrawings from './mm.2019-5-15.js';
import powerBallDrawings from './pb.2019-5-15.js';
import LottoStatsDisplay from './lottoStatsDisplay.js';

let numOfHotDrawings = parseFloat(document.getElementById('numOfHotDrawings').value);
let numOfJackpots = parseFloat(document.getElementById('numOfJackpots').value);

const megaMillionsStats = new LottoStatsDisplay(megaMillionsDrawings, 70, 25, numOfHotDrawings);
const megaMillionsDivId = 'megaMillions';
const megaBall = 'Mega Ball';

megaMillionsStats.displayNumbersDrawn(megaMillionsDivId);
megaMillionsStats.displaySpecialNumbersDrawn(megaMillionsDivId, megaBall);
megaMillionsStats.displayHotNumbers(megaMillionsDivId, 20);
megaMillionsStats.displayHotSpecialNumbers(megaMillionsDivId, megaBall, 10);
megaMillionsStats.displayTopJacks(megaMillionsDivId, numOfJackpots);

const powerBallStats = new LottoStatsDisplay(powerBallDrawings, 69, 26, numOfHotDrawings);
const powerBallDivId = 'powerBall';
const powerBall = 'Power Ball';

powerBallStats.displayNumbersDrawn(powerBallDivId);
powerBallStats.displaySpecialNumbersDrawn(powerBallDivId, powerBall);
powerBallStats.displayHotNumbers(powerBallDivId, 20);
powerBallStats.displayHotSpecialNumbers(powerBallDivId, powerBall, 10);
powerBallStats.displayTopJacks(powerBallDivId, numOfJackpots);