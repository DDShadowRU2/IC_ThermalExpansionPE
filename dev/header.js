/*

  _______ _                               _ ______                            _             _____  ______
 |__   __| |                             | |  ____|                          (_)           |  __ \|  ____|
    | |  | |__   ___ _ __ _ __ ___   __ _| | |__  __  ___ __   __ _ _ __  ___ _  ___  _ __ | |__) | |__
    | |  | '_ \ / _ \ '__| '_ ` _ \ / _` | |  __| \ \/ / '_ \ / _` | '_ \/ __| |/ _ \| '_ \|  ___/|  __|
    | |  | | | |  __/ |  | | | | | | (_| | | |____ >  <| |_) | (_| | | | \__ \ | (_) | | | | |    | |____
    |_|  |_| |_|\___|_|  |_| |_| |_|\__,_|_|______/_/\_\ .__/ \__,_|_| |_|___/_|\___/|_| |_|_|    |______|
                                                       | |
                                                       |_|
     by Dmitriy Medvedev(https://vk.com/id331953744), Artyom Kaktysh(https://vk.com/artyom_kaktysh) and Denis Dzhugalik(https://vk.com/id235887284)
 */
importLib("ToolType", "*");
importLib("energylib", "*");

var RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);
var industrial_loaded = false;

var FURNACE_FUEL_MAP = {
    5: 300,
    6: 100,
    17: 300,
    263: 1600,
    280: 100,
    268: 200,
    269: 200,
    270: 200,
    271: 200,
    85: 300,
    107: 300,
    134: 300,
    135: 300,
    158: 150,
    162: 300,
    163: 300,
    164: 300,
    184: 300,
    185: 300,
    186: 300,
    187: 300,
    53: 300,
    54: 300,
    58: 300
};

function addRecipeWithCraftingTool(result, data, tool) {
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function (api, field, result) {
        for (var i in field) {
            if (field[i].id == tool) {
                field[i].data++;
                if (field[i].data >= CRAFTING_TOOL_ITEM_MAX_DAMAGE) {
                    field[i].id = field[i].count = field[i].data = 0;
                }
            }
            else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}