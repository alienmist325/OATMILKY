import GoogleMaps from "./GoogleMaps";

export default class CoffeeShopLocator {
  private maps;

  constructor(maps: GoogleMaps) {
    this.maps = maps;
  }

  getMatchingShops(location: string, radiusInMetres: number) {
    const shopsInRadius = this.maps.fetchShops(location, radiusInMetres);
    return shopsInRadius[0];
  }
}
