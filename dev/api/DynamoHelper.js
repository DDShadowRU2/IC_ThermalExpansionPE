var DynamoHelper = {

    MIN_POWER: 8,
    MAX_POWER: 80,

    registerDynamo: function (unique, name, texture, tile) {

        Block.setPrototype(unique, {
            type: Block.TYPE_BASE,

            getVariations: function () {
                return [
                    {name: name, texture: [[texture, 1], [texture, 2], [texture, 0]], inCreative: true}
                ];
            }

        });

        var render = new TileRenderModel(BlockID[unique], 0);
        render.addBox(0, 0, 0, {x: 1, y: 0.61, z: 1}, {id: BlockID[unique], data: 0});
        render.addBox(0.250, 0.62, 0.250, {x: 0.496, y: 0.38, z: 0.496}, {id: BlockID[unique], data: 0});

        Block.setBlockShape(BlockID[unique], {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.62, z: 0.999});
        MachineRegistry.register(BlockID[unique], tile);
    },

    calcEnergy: function (tile) {
        if (tile.data.energy < tile.getEnergyStorage() / 10) {
            return this.MAX_POWER; //max power
        }
        if (tile.data.energy > 9 * tile.getEnergyStorage() / 10) {
            return this.MIN_POWER; //min power
        }

        return (tile.getEnergyStorage() - tile.data.energy) / ((9 * tile.getEnergyStorage() / 10) / (tile.getEnergyStorage() / 10));
    }

};