// @todo Spawn creeps dynamically.
Room.prototype.queueCreep = function (definition) {
    if (!this.memory.spawnQueue) {
        this.memory.spawnQueue = {};
    }

    Memory.creepCounter = (Memory.creepCounter || 0) + 1;

    var creepName = 'c_' + Memory.creepCounter;

    this.memory.spawnQueue[creepName] = definition;

    return creepName;
};

module.exports = {

    run: function (task) {

    },

};
