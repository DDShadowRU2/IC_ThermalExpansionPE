var PulverizerRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};

PulverizerRecipes.add({
    input: {id: 1, data: 0},
    result: {id: 2, data: 0, count: 3},
    dop: {id: 3, data: 0, count: 2, chance: 0.3}
});
PulverizerRecipes.add({
    input: {id: 1, data: 0},
    result: {id: 4, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: 4, data: 0},
    result: {id: 12, data: 0, count: 1},
    dop: {id: 13, data: 0, count: 1, chance: 0.1}
});
PulverizerRecipes.add({
    input: {id: 43, data: 5},
    result: {id: 97, data: 4, count: 1},
});
PulverizerRecipes.add({
    input: {id: 155, data: 2},
    result: {id: 406, data: 0, count: 4},
});
PulverizerRecipes.add({
    input: {id: 156, data: 0},
    result: {id: 406, data: 0, count: 6},
});
PulverizerRecipes.add({
    input: {id: 13, data: 0},
    result: {id: 318, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: 20, data: 0},
    result: {id: 12, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: 24, data: 0},
    result: {id: 12, data: 0, count: 2},
    dop: {id: 13, data: 0, count: 1, chance: 0.1}
});