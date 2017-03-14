Room.prototype.init = function() {
    var sources = this.find(FIND_SOURCES);
    for (var i in sources) {
        sources[i].init();
    }
}
