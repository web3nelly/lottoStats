import megaMillionsDrawings from "./mm.2019-5-15.js";
import powerBallDrawings from "./pb.2019-5-15.js";
import LottoStatsDisplay from "./lottoStatsDisplay.js";

const numOfHotDrawingsInput = document.getElementById("numOfHotDrawings");
const numOfJackpotsInput = document.getElementById("numOfJackpots");

const megaMillionsDivId = "megaMillions";
const megaBall = "Mega Ball";
const powerBallDivId = "powerBall";
const powerBall = "Power Ball";

function updateLottoStats() {
  // Clear the contents of the div elements
  document.getElementById(megaMillionsDivId).innerHTML = "";
  document.getElementById(powerBallDivId).innerHTML = "";

  let numOfHotDrawings = parseFloat(numOfHotDrawingsInput.value);
  let numOfJackpots = parseFloat(numOfJackpotsInput.value);

  const megaMillionsStats = new LottoStatsDisplay(
    megaMillionsDrawings,
    70,
    25,
    numOfHotDrawings
  );

  megaMillionsStats.displayNumbersDrawn(megaMillionsDivId);
  megaMillionsStats.displaySpecialNumbersDrawn(megaMillionsDivId, megaBall);
  megaMillionsStats.displayHotNumbers(megaMillionsDivId, 20);
  megaMillionsStats.displayHotSpecialNumbers(megaMillionsDivId, megaBall, 10);
  megaMillionsStats.displayTopJacks(megaMillionsDivId, numOfJackpots);

  const powerBallStats = new LottoStatsDisplay(
    powerBallDrawings,
    69,
    26,
    numOfHotDrawings
  );

  powerBallStats.displayNumbersDrawn(powerBallDivId);
  powerBallStats.displaySpecialNumbersDrawn(powerBallDivId, powerBall);
  powerBallStats.displayHotNumbers(powerBallDivId, 20);
  powerBallStats.displayHotSpecialNumbers(powerBallDivId, powerBall, 10);
  powerBallStats.displayTopJacks(powerBallDivId, numOfJackpots);
}

// Add event listeners to the input elements
numOfHotDrawingsInput.addEventListener("change", updateLottoStats);
numOfJackpotsInput.addEventListener("change", updateLottoStats);

// Initial display of the stats
updateLottoStats();
