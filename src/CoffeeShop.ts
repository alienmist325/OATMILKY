class CoffeeShop {
  private name: string;
  private servesOATLY: boolean;
  private priceUnderThreeFifty: boolean;

  constructor(
    name: string,
    servesOATLY: boolean,
    priceUnderThreeFifty: boolean
  ) {
    this.name = name;
    this.servesOATLY = servesOATLY;
    this.priceUnderThreeFifty = priceUnderThreeFifty;
  }
}

export default CoffeeShop;
