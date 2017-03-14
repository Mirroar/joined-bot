module.exports = {

    run: function (task) {

        if (!task.creeps) {
            task.creeps = {};

            // @todo Count number of free spaces to limit creep spawning.
        }

        if (_.size(task.creeps) === 0) {
            var spawnId = this.room.queueCreep({body: [WORK, WORK, CARRY, MOVE]});
            task.creeps[spawnId] = 'requested';
        }

    },

};
