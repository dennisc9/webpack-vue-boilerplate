export const format = {
  methods: {
    /*
      NUMBERS
    */
    getFormattedNumber (_num) {
      if (this.checkIfNumber(_num)) {
        return Number(_num).toLocaleString('en-US', { useGrouping: true });
      } else return "";
    },
    getNumberRounded (_num) {
      if (this.checkIfNumber(_num)) {
        return this.getFormattedNumber(Math.round(Number(_num)));
      } else return "";
    },
    getNumberToOneDecimal (_num) {
      if (this.checkIfNumber(_num)) {
        return Number(_num).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 1, minimumFractionDigits: 1 });
      } else return "";
    },
    getNumberToTwoDecimal (_num) {
      if (this.checkIfNumber(_num)) {
        return Number(_num).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 });
      } else return "";
    },
    getNumberToTwoDecimalMax (_num) {
      if (this.checkIfNumber(_num)) {
        return Number(_num).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 0 });
      } else return "";
    },
    /*
      Dollars
    */
    getDollar (_num) {
      if (this.checkIfNumber(_num)) {
        return "$" + this.getNumberToTwoDecimal(_num);
      } else return "";
    },
    getDollarRounded (_num) {
      if (this.checkIfNumber(_num)) {
        return "$ " + this.getNumberRounded(_num);
      } else return "";
    },

    /*
      Percents
    */
    addPercent (_num) {
      if (this.checkIfNumber(_num))
        return _num + "%";
      else return "";
    },
    addPercentRound (_num) {
      if (this.checkIfNumber(_num))
        return this.getNumberRounded(_num) + "%";
      else return "";
    },
    addPercentToOneDecimal (_num) {
      if (this.checkIfNumber(_num))
        return this.getNumberToOneDecimal(_num) + "%";
      else return "";
    },
    addPercentToTwoDecimal (_num) {
      if (this.checkIfNumber(_num))
        return this.getNumberToTwoDecimal(_num) + "%";
      else return "";
    },
    caclPercentRounded (_num) {
      if (this.checkIfNumber(_num)) {
        let n = Number(_num);
        if (n === 0)
          return "0%";
        else
          return this.getNumberRounded(n * 100) + "%";
      }
      return "";
    },
    calcPercentToOneDecimal (_num) {
      if (this.checkIfNumber(_num)) {
        let n = Number(_num);
        if (n === 0)
          return "0.0%";
        else
          return this.getNumberToOneDecimal(n * 100) + "%";
      }
      return "";
    },
    calcPercentToTwoDecimal (_num) {
      if (this.checkIfNumber(_num)) {
        let n = Number(_num);
        if (n === 0)
          return "0.00%";
        else
          return this.getNumberToTwoDecimal(n * 100) + "%";
      }
      return "";
    },
    /* if Null or "" return "None" else calcPercent */
    calcPercentToOneDecimalOrNull (_num) {
      if (this.checkIfNumber(_num)) {
        return this.calcPercentToOneDecimal(_num);
      } else
        return "None";
    },
    /* to de-calculate a percent is go to from 5% to 0.05 */
    deCalcPercent (_num) {
      if (this.checkIfNumber(_num)) {
        let n = Number(_num);
        if (n === 0)
          return 0;
        else
          return n / 100;
      }
    },
    /*
      Basis point
    */
    calcBasisPoint (_num) {
      if (this.checkIfNumber(_num))
        return this.getFormattedNumber((Number(_num) * 100 * 100).toFixed(0)) + " (BPS)";
      return "";
    },
    /*
      Strings
    */
    addSpaceToSlash (str) {
      return str.replace(/\//g, " / ");
    },
    allUppercase (_string) {
      return _string.toUpperCase();
    },
    allLowercase (_string) {
      return _string.toLowercase();
    },
    capitalizeWords (_string) {
      if (_string)
        return _string.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      else return _string;
    },
    capitalizeFirstWord (_string) {
      if (_string)
        return _string.charAt(0).toUpperCase() + _string.slice(1);
      else return _string;
    },
    /*
      Utility Classes
    */
    checkIfNumber (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }
};
