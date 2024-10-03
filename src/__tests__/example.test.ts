import CoffeeShop from "../CoffeeShop";
import GoogleMaps from "../GoogleMaps";
import CoffeeShopLocator from "../CoffeeShopLocator";

describe("Coffee Shop Locator", () => {
  describe("when I have specified my location", () => {
    describe("and I have entered my preferred search radius", () => {
      let mockFetchShops;
      let location: string;
      let radius: number;
      let coffeeShopLocator: CoffeeShopLocator;

      const blankStreetCoffee = new CoffeeShop(
        "Blank Street Coffee",
        false,
        true
      );

      const coffeeMTowerOfLondon = new CoffeeShop(
        "coffeeM Tower of London",
        true,
        false
      );

      const hagenEspresso = new CoffeeShop(
        "Hagen Espresso Bar (Hagen Royal Exchange)",
        false,
        false
      );

      const copperCoffee = new CoffeeShop("Copper Coffee", true, true);

      beforeEach(() => {
        const mockShops = [
          copperCoffee,
          blankStreetCoffee,
          coffeeMTowerOfLondon,
          hagenEspresso,
        ];

        location = "1, Sky Garden Walk, London EC3M 8AF";
        radius = 1000;

        const maps = new GoogleMaps();
        mockFetchShops = jest.spyOn(maps, "fetchShops");
        mockFetchShops.mockReturnValue(mockShops);

        coffeeShopLocator = new CoffeeShopLocator(maps);
      });

      it("should return Copper Coffee, given a certain set of coffee shops.", () => {
        expect(coffeeShopLocator.getMatchingShops(location, radius)).toBe(
          copperCoffee
        );
      });
    });
  });
});
