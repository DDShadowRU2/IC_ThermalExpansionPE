IDRegistry.genBlockID("fluxductLeadstone");
Block.createBlock("fluxductLeadstone", [
    {name: "Leadstone Fluxduct", texture: [["fluxduct_lead", 0]], inCreative: true}
], RF.getWireSpecialType());

IDRegistry.genBlockID("fluxductHardened");
Block.createBlock("fluxductHardened", [
    {name: "Hardened Fluxduct", texture: [["fluxduct_invar", 0]], inCreative: true}
], RF.getWireSpecialType());

IDRegistry.genBlockID("fluxductRedstone");
Block.createBlock("fluxductRedstone", [
    {name: "Redstone Energy Fluxduct", texture: [["fluxduct_electrum", 0]], inCreative: true}
], RF.getWireSpecialType());

IDRegistry.genBlockID("fluxductSignalum");
Block.createBlock("fluxductSignalum", [
    {name: "Signalum Fluxduct", texture: [["fluxduct_signalum", 0]], inCreative: true}
], RF.getWireSpecialType());

IDRegistry.genBlockID("fluxductResonant");
Block.createBlock("fluxductResonant", [
    {name: "Resonant Fluxduct", texture: [["fluxduct_enderium", 0]], inCreative: true}
], RF.getWireSpecialType());

ICRenderLib.registerAsWire(BlockID.fluxductLeadstone, "RF_CONNECTION_GROUP", 0.38);
ICRenderLib.registerAsWire(BlockID.fluxductHardened, "RF_CONNECTION_GROUP", 0.38);
ICRenderLib.registerAsWire(BlockID.fluxductRedstone, "RF_CONNECTION_GROUP", 0.38);
ICRenderLib.registerAsWire(BlockID.fluxductSignalum, "RF_CONNECTION_GROUP", 0.38);
ICRenderLib.registerAsWire(BlockID.fluxductResonant, "RF_CONNECTION_GROUP", 0.38);

Block.setBlockShape(BlockID.fluxductLeadstone, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductHardened, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductRedstone, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductSignalum, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductResonant, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});