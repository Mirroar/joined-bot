if (!Memory.tasks) {
    Memory.tasks = {};
}
require('Source');
require('Room');

var taskManager = require('tasks');

var taskHandlers = {
    harvest: require('task_harvest'),
    spawn: require('task_spawn'),
};

module.exports.loop = function () {

    Game.taskHandlers = taskHandlers;

    for (var roomName in Game.rooms) {
        var room = Game.rooms[roomName];

        if (room.controller && room.controller.my) {
            room.init();
        }
    }

    taskManager.run();

};
