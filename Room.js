Room.prototype.init = function() {
    if (this.memory.initialized) return;

    var sources = this.find(FIND_SOURCES);
    for (var i in sources) {
        sources[i].init();
    }

    this.memory.initialized = true;
};
