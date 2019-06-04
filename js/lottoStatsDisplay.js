import LottoStats from './lottoStats.js';

export default class LottoStatsDisplay extends LottoStats {

  /**
   * @param {string} id of the HTML element writing to
   */
  displayNumbersDrawn = (id) => {
    let result = `<h3>Times number has been drawn (${this.drawings.length} drawings):</h3>`;

    this.numbersDrawn.forEach(drawn => {
      result += this.displayNumber(drawn.number, drawn.count);
    });

    document.getElementById(id).innerHTML += result;
  }

  /**
   * @param {string} id of the HTML element writing to
   * @param {number} numOfHotNums to display
   */
  displayHotNumbers = (id, numOfHotNums) => {
    let inYears = this.numOfHotDrawingsInYears();

    let result = `<h3>Hottest ${numOfHotNums} numbers over last ${this.numOfHotDrawings} drawings (${inYears} years):</h3>`;

    this.hotNumbers.splice(0, numOfHotNums).forEach(drawn => {
      result += this.displayNumber(drawn.number, drawn.count);
    });

    document.getElementById(id).innerHTML += result;
  }

  /**
   * @param {string} id of the HTML element writing to
   * @param {string} name of special number (ball)
   */
  displaySpecialNumbersDrawn = (id, name) => {
    let result = `<h3>Times ${name} number has been drawn:</h3>`;

    this.specialNumbersDrawn.forEach(drawn => {
      result += this.displayNumber(drawn.number, drawn.count, true);
    });

    document.getElementById(id).innerHTML += result;
  }

  /**
   * @param {string} id of the HTML element writing to
   * @param {string} name of special number (ball)
   * @param {number} numOfHotNums to display
   */
  displayHotSpecialNumbers = (id, name, numOfHotNums) => {
    let inYears = this.numOfHotDrawingsInYears();

    let result = `<h3>Hottest ${numOfHotNums} ${name} numbers over last ${this.numOfHotDrawings} drawings (${inYears} years):</h3>`;

    this.hotSpecialNumbers.splice(0, numOfHotNums).forEach(drawn => {
      result += this.displayNumber(drawn.number, drawn.count, true);
    });

    document.getElementById(id).innerHTML += result;
  }

  /**
   * @param {number} lottoNumber (ball)
   * @param {number} count how many times lottoNumber occurred
   * @return {string} HTML output
   */
  displayNumber = (lottoNumber, count, special = false) => {
    const specialClass = special ? ' special' : '';

    return `<span class="number${specialClass}">${lottoNumber}</span>
    <span class="count">${count}</span>`;
  }

  /**
   * @param {string} id of the HTML element writing to
   * @param {number} number of top jackpots to display
   */
  displayTopJacks = (id, number) => {
    let result = `<h3>Top ${number} Jackpots (Million):</h3>`;

    this.buildTopJackpots(number).forEach(jackpot => {
      result += `<span class="jackpot">$${jackpot}</span>`
    })

    document.getElementById(id).innerHTML += result;
  }
}