export default class LottoStats {
  drawings = [];
  numbersDrawn = [];
  specialNumbersDrawn = [];

  numOfHotDrawings = 0;
  hotNumbers = [];
  hotSpecialNumbers = [];

  /** 
  * @param {array} drawings jsons array of drawings
  * @param {number} numTo number of balls drawn from
  * @param {number} specTo number of special balls darwn from
  * @param {number} numOfHotDrawings number of last drawings (default = 96 = last year)
  */
  constructor(drawings, numTo, specTo, numOfHotDrawings = 96) {
    this.drawings = drawings;
    this.buildNumbersDrawn(numTo);
    this.buildSpecialNumbersDrawn(specTo);

    this.numOfHotDrawings = numOfHotDrawings;
    this.buildHotNumbers(numTo, numOfHotDrawings);
    this.buildHotSpecialNumbers(specTo, numOfHotDrawings);
  }

  /**
   * @param {number} ballsDrawn number of balls drawn from
   */
  buildNumbersDrawn = (ballsDrawn) => {
    for (let number = 1; number <= ballsDrawn; number++)
      this.numbersDrawn.push({
        number: number,
        count: this.countNumbersDrawn(number, this.drawings)
      });

    this.sortByCount(this.numbersDrawn);
  }

  /**
   * @param {number} ballsDrawn number of balls drawn from
   * @param {number} numOfDrawings the lastest number of drawnings to use
   */
  buildHotNumbers = (ballsDrawn, numOfDrawings) => {
    let drawings = [...this.drawings];
    drawings = drawings.slice(0, numOfDrawings);

    for (let number = 1; number <= ballsDrawn; number++)
      this.hotNumbers.push({
        number: number,
        count: this.countNumbersDrawn(number, drawings)
      });

    this.sortByCount(this.hotNumbers);
  }

  /**
   * @param {number} ballsDrawn number of balls drawn from
   */
  buildSpecialNumbersDrawn = (ballsDrawn) => {
    for (let number = 1; number <= ballsDrawn; number++)
      this.specialNumbersDrawn.push({
        number: number,
        count: this.countSpecailNumbersDrawn(number, this.drawings)
      });

    this.sortByCount(this.specialNumbersDrawn);
  }

  /**
   * @param {number} ballsDrawn number of balls drawn from
   * @param {number} numOfDrawings the lastest number of drawnings to use
   */
  buildHotSpecialNumbers = (ballsDrawn, numOfDrawings) => {
    let drawings = [...this.drawings];
    drawings = drawings.slice(0, numOfDrawings);

    for (let number = 1; number <= ballsDrawn; number++)
      this.hotSpecialNumbers.push({
        number: number,
        count: this.countSpecailNumbersDrawn(number, drawings)
      });

    this.sortByCount(this.hotSpecialNumbers);
  }

  /**
   * @param {number} number (ball) that is being counted
   * @param {array} drawings array of drawings to count from
   * @return {number} occurrences of drawn number
   */
  countNumbersDrawn = (number, drawings) => {
    let count = 0;

    drawings.forEach(d => {
      if (d.a === number || d.b === number || d.c === number || d.d === number || d.e === number)
        count++;
    });

    return count;
  }

  /**
   * @param {number} number (ball) that is being counted
   * @param {array} drawings array of drawings to count from
   * @return {number} occurrences of drawn special number
   */
  countSpecailNumbersDrawn = (number, drawings) => {
    let count = 0;

    drawings.forEach(d => {
      if (d.special === number)
        count++;
    });

    return count;
  }

  cleanJackpots = () => {
    this.drawings.forEach(drawning => {
      drawning.jackpot = parseFloat(drawning.jackpot.substring(
        drawning.jackpot.lastIndexOf("$") + 1,
        drawning.jackpot.lastIndexOf(".")
      ))
    });
  }

  /**
   * @param {number} number of top jackopts to use
   * @return {array} sorted array of top jackpots
   */
  buildTopJackpots = (number) => {
    this.cleanJackpots();

    let drawings = [...this.drawings];

    drawings = drawings
      .sort((a, b) => b.jackpot - a.jackpot)
      .slice(0, number)
      .map(d => d.jackpot)

    return drawings;
  }

  /**
   * @param {array} drawings to sort
   * @return {array} sorted by highest count first
   */
  sortByCount = (drawings) => {
    return drawings.sort((a, b) => b.count - a.count);
  }

  /**
   * @return {number} inYears rounded to first decimal
   */
  numOfHotDrawingsInYears() {
    const inYears = this.numOfHotDrawings / 96;

    return Math.round(inYears * 10) / 10;
  }
}