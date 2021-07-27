class Converter {
  convert(number) {
    if (this.format === 'romain') {
      return this.romain(number);
    }
    if (this.format === 'morze') {
      return this.morze(number);
    }
    return number;
  }
}

module.exports = Converter;
