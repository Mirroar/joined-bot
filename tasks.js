module.exports = {

    run: function () {
        for (var id in Memory.tasks) {
            var task = Memory.tasks[id];

            if (Game.taskHandlers[task.type]) {
                Game.taskHandlers[task.type].run.call(Game.getObjectById(task.parent), task);
            }
        }
    }

};
