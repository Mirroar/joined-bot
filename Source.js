Source.prototype.init = function() {
    Memory.tasks[this.id] = {
        type: 'harvest',
        parent: this.id,
    };
};
