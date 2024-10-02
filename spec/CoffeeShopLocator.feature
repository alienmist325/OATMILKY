Feature: Coffee Shop Locator

Show me coffee shops filtered by OATLY oat milk and price under 3.5 quid near me

@mytag
Scenario Outline: Get coffee shops 
Given I have specified my location as "Eastcheap Close"
And I have entered my preferred search radius as "1km"
And I have these coffee shops within my "1km" radius from Google
| Name                                      | Location                                   | Serves OATLY Oat Milk | Is Under £3.50 | 
| Copper Coffee                             | 45 Aldgate High St, London EC3N 1AL        | True                  | True           |
| Blank Street Coffee                       | 87 Old Broad St, London EC2N 1BG           | False                 | True           |
| coffeeM Tower of London                   | 40 Trinity Square, London EC3N 4DJ         | True                  | False          |
| Hagen Espresso Bar (Hagen Royal Exchange) | Unit 14-15 Royal Exchange, London EC3V 3LP | False                 | False          |
When I press "Search"
Then the result should be the following on the screen
| Name          |
| Copper Coffee | 