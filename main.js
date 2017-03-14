if (!Memory.tasks) {
    Memory.tasks = {};
}
require('Source');
require('Room');

module.exports.loop = function () {

    for (var roomName in Game.rooms) {
        var room = Game.rooms[roomName];

        if (room.controller && room.controller.my) {
            room.init();
        }
    }

};
