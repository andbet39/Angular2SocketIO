System.register([], function(exports_1) {
    "use strict";
    var Room;
    return {
        setters:[],
        execute: function() {
            Room = (function () {
                function Room(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Room;
            }());
            exports_1("Room", Room);
        }
    }
});
//# sourceMappingURL=room.js.map