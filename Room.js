Room.prototype.init = function() {
    if (this.memory.initialized) return;

    // Create harvest tasks on souces.
    var sources = this.find(FIND_SOURCES);
    for (var i in sources) {
        sources[i].init();
    }

    // Create spawn task.
    Memory.tasks[this.name + '_spawn'] = {
        type: 'spawn',
        parent: this.name,
    };

    this.memory.initialized = true;
};
