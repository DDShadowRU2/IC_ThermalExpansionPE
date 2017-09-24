IDRegistry.genBlockID("oreIridium");
Block.createBlock("oreIridium", [
    {name: "Iridium ore", texture: [["ore_iridium", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
    {name: "Lead ore", texture: [["ore_lead", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreMithril");
Block.createBlock("oreMithril", [
    {name: "Mithril ore", texture: [["ore_mithril", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreNickel");
Block.createBlock("oreNickel", [
    {name: "Nickel ore", texture: [["ore_nickel", 0]], inCreative: true}
]);

IDRegistry.genBlockID("orePlatinum");
Block.createBlock("orePlatinum", [
    {name: "Platinum ore", texture: [["ore_platinum", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver ore", texture: [["ore_silver", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
    {name: "Tin ore", texture: [["ore_tin", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    {name: "Copper ore", texture: [["ore_copper", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreAluminum");
Block.createBlock("oreAluminum", [
    {name: "Aluminum ore", texture: [["ore_aluminum", 0]], inCreative: true}
]);

Block.registerDropFunction("oreAluminum", function () {
    return [[ItemID.oreAluminum, 1, 0]];
});

Block.registerDropFunction("oreCopper", function () {
    return [[ItemID.oreCopper, 1, 0]];
});

Block.registerDropFunction("oreIridium", function () {
    return [[ItemID.oreIridium, 1, 0]];
});

Block.registerDropFunction("oreLead", function () {
    return [[ItemID.oreLead, 1, 0]];
});

Block.registerDropFunction("oreMithril", function () {
    return [[ItemID.oreMithril, 1, 0]];
});

Block.registerDropFunction("oreNickel", function () {
    return [[ItemID.oreNickel, 1, 0]];
});

Block.registerDropFunction("orePlatinum", function () {
    return [[ItemID.orePlatinum, 1, 0]];
});

Block.registerDropFunction("oreSilver", function () {
    return [[ItemID.oreSilver, 1, 0]];
});

Block.registerDropFunction("oreTin", function () {
    return [[ItemID.oreTin, 1, 0]];
});

ToolAPI.registerBlockMaterialAsArray("stone", [BlockID.oreAluminum, BlockID.oreIridium, BlockID.oreLead, BlockID.oreMithil, BlockID.oreNickel, BlockID.orePlatinum, BlockID.oreSilver, BlockID.oreTin, BlockID.oreCopper]);
ToolAPI.registerBlockDiggingLevel(BlockID.oreIridium, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.oreLead, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreMithil, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.oreNickel, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.orePlatinum, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.oreSilver, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreTin, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreCopper, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreAluminum, 1);

//ITEMS
IDRegistry.genItemID("oreIridium");
Item.createItem("oreIridium", "Iridium ore", {name: "ore_iridium", meta: 0}, {});

IDRegistry.genItemID("oreLead");
Item.createItem("oreLead", "Lead ore", {name: "ore_lead", meta: 0}, {});

IDRegistry.genItemID("oreMithril");
Item.createItem("oreMithril", "Mithril ore", {name: "ore_mithril", meta: 0}, {});

IDRegistry.genItemID("oreNickel");
Item.createItem("oreNickel", "Nickel ore", {name: "ore_nickel", meta: 0}, {});

IDRegistry.genItemID("orePlatinum");
Item.createItem("orePlatinum", "Platinum ore", {name: "ore_platinum", meta: 0}, {});

IDRegistry.genItemID("oreSilver");
Item.createItem("oreSilver", "Silver ore", {name: "ore_silver", meta: 0}, {});

IDRegistry.genItemID("oreTin");
Item.createItem("oreTin", "Tin ore", {name: "ore_tin", meta: 0}, {});

IDRegistry.genItemID("oreCopper");
Item.createItem("oreCopper", "Copper ore", {name: "ore_copper", meta: 0}, {});

IDRegistry.genItemID("oreAluminum");
Item.createItem("oreAluminum", "Aluminum ore", {name: "ore_aluminum", meta: 0}, {});

Callback.addCallback("PostLoaded", function () {

    Recipes.addFurnace(ItemID.oreCopper, ItemID.ingotCopper, 0);
    Recipes.addFurnace(ItemID.oreTin, ItemID.ingotTin, 0);
    Recipes.addFurnace(ItemID.oreLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(ItemID.oreAluminum, ItemID.ingotAluminum, 0);
    Recipes.addFurnace(ItemID.oreNickel, ItemID.ingotNickel, 0);
    Recipes.addFurnace(ItemID.orePlatinum, ItemID.ingotPlatinum, 0);
    Recipes.addFurnace(ItemID.oreIridium, ItemID.ingotIridium, 0);
    Recipes.addFurnace(ItemID.oreMithril, ItemID.ingotMithril, 0);

});

var OreGenerator = {
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generate: function (x, y, z, maxCount) {
        if (World.getBlock(x, y, z).id === 1) {
            GenerationUtils.setLockedBlock(x, y, z);
            for (var i = 1; i < this.random(1, maxCount); i++) {
                GenerationUtils.setLockedBlock(x + this.random(-1, 1), y + this.random(-1, 1), z + this.random(-1, 1));
            }
        }
    }
};

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    //Отключаем генерацию некоторых руд если установлен IC
    if (!industrial_loaded) {
        if (Config.genCopper) {
            GenerationUtils.lockInBlock(BlockID.oreCopper, 0);
            for (var i = 0; i < 10; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 75);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }

        if (Config.genTin) {
            GenerationUtils.lockInBlock(BlockID.oreTin, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 55);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }

        if (Config.genLead) {
            GenerationUtils.lockInBlock(BlockID.oreLead, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 35);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }
    }

    if (Config.genSilver) {
        GenerationUtils.lockInBlock(BlockID.oreSilver, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 8);
        }
    }

    if (Config.genNickel) {
        GenerationUtils.lockInBlock(BlockID.oreNickel, 0);
        for (var i = 0; i < 3; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 20);
            OreGenerator.generate(coords.x, coords.y, coords.z, 4);
        }
    }

    if (Config.genPlatinum) {
        GenerationUtils.lockInBlock(BlockID.oreTin, 0);
        for (var i = 0; i < 8; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 1);
        }
    }


});
