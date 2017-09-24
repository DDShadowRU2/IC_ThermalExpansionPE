DRegistry.genBlockID("MagmaCrucible");
Block.createBlockWithRotation("MagmaCrucible", [
    {
        name: "Magma Tigel",
        texture: [["machine_bottom", 0], ["machine_top", 0], ["machine_side", 0], ["machine_face_crucible", 0], ["machine_side", 0], ["machine_side", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.MagmaCrucible, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.MachineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.RedstoneReceptionCoil]);
});

var guiMagmaCrucible = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Magma Crucible"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "fluid_scale": {type: "scale", x: 625, y: 142, direction: 1, bitmap: "fluid_steam", scale: 3.2},

        "slotSource": {type: "slot", x: 441, y: 142},
    }
});