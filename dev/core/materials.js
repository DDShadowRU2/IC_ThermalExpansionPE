ToolAPI.addToolMaterial("copper", {durability: 175, level: 1, efficiency: 4, damage: 1, enchantability: 6});
ToolAPI.addToolMaterial("tin", {durability: 200, level: 1, efficiency: 5, damage: 1, enchantability: 7});
ToolAPI.addToolMaterial("silver", {durability: 200, level: 2, efficiency: 6, damage: 2, enchantability: 20});
ToolAPI.addToolMaterial("lead", {durability: 150, level: 1, efficiency: 5, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("aluminum", {durability: 225, level: 1, efficiency: 10, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("nickel", {durability: 300, level: 2, efficiency: 6, damage: 2, enchantability: 18});
ToolAPI.addToolMaterial("platinum", {durability: 1700, level: 4, efficiency: 9, damage: 4, enchantability: 9});
ToolAPI.addToolMaterial("steel", {durability: 500, level: 2, efficiency: 6, damage: 2, enchantability: 10});
ToolAPI.addToolMaterial("electrum", {durability: 100, level: 0, efficiency: 14, damage: 1, enchantability: 30});
ToolAPI.addToolMaterial("invar", {durability: 450, level: 2, efficiency: 7, damage: 3, enchantability: 16});
ToolAPI.addToolMaterial("bronze", {durability: 500, level: 2, efficiency: 6, damage: 2, enchantability: 15});
ToolAPI.addToolMaterial("constantan", {durability: 275, level: 2, efficiency: 6, damage: 2, enchantability: 20});

MaterialRegistry.defineMaterial(false, "Copper", [1, 3, 3, 1], 6, "block_copper", "glass_copper");
MaterialRegistry.defineMaterial(false, "Tin", [1, 3, 4, 1], 8, "block_tin", "glass_tin");
MaterialRegistry.defineMaterial(false, "Silver", [2, 4, 4, 1], 11, "block_silver", "glass_silver");
MaterialRegistry.defineMaterial(false, "Aluminum", [2, 4, 5, 3], 15, "block_aluminum", "glass_aluminum");
MaterialRegistry.defineMaterial(false, "Lead", [1, 3, 4, 2], 12, "block_lead", "glass_lead");
MaterialRegistry.defineMaterial(false, "Nickel", [2, 5, 5, 2], 15, "block_nickel", "glass_nickel");
MaterialRegistry.defineMaterial(false, "Platinum", [3, 6, 8, 3], 40, "block_platinum", "glass_platinum");
MaterialRegistry.defineMaterial(false, "Steel", [2, 5, 7, 2], 22, "block_steel", "glass_steel");
MaterialRegistry.defineMaterial(false, "Electrum", [2, 4, 4, 2], 8, "block_electrum", "glass_electrum");
MaterialRegistry.defineMaterial(false, "Invar", [2, 5, 7, 2], 21, "block_invar", "glass_invar");
MaterialRegistry.defineMaterial(false, "Bronze", [2, 6, 6, 2], 18, "block_bronze", "glass_bronze");
MaterialRegistry.defineMaterial(false, "Constantan", [2, 4, 4, 2], 13, "block_constantan", "glass_constantan");

//Vanilla materials
MaterialRegistry.defineMaterial(true, "Iron");
MaterialRegistry.defineMaterial(true, "Gold");

IDRegistry.genItemID("thermalHammer");
Item.createItem("thermalHammer", "Crescent hammer", {name: "hammer", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: ItemID.thermalHammer, count: 1, data: 0}, [
        "222",
        "212",
        "a1a"
    ], ['1', 280, 0, '2', 265, 0]);

});