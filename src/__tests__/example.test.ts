import CoffeeShop from "../CoffeeShop";
import GoogleMaps from "../GoogleMaps";
import CoffeeShopLocator from "../CoffeeShopLocator";

describe("Coffee Shop Locator", () => {
  describe("when I have specified my location", () => {
    describe("and I have entered my preferred search radius", () => {
      it("should return Copper Coffee, given a certain set of coffee shops.", () => {
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

        const mockShops = [
          copperCoffee,
          blankStreetCoffee,
          coffeeMTowerOfLondon,
          hagenEspresso,
        ];

        const location = "1, Sky Garden Walk, London EC3M 8AF";
        const radius = 1000;

        const maps = new GoogleMaps();
        const mockFetchShops = jest.spyOn(maps, "fetchShops");
        mockFetchShops.mockReturnValue(mockShops);

        const coffeeShopLocator = new CoffeeShopLocator(maps);

        expect(coffeeShopLocator.getMatchingShops(location, radius)).toBe(
          copperCoffee
        );
      });
    });
  });
});
