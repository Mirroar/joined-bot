Source.prototype.init = function() {
    var task = {
        type: 'harvest',
        ttl: -1,
        active: false,
        parent: this.id
    };
    Memory.tasks[this.id] = task;
}
