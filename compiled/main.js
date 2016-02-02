System.register(['angular2/platform/browser', './app.component', './socket.service', './room.service', 'angular2/http'], function(exports_1) {
    var browser_1, app_component_1, socket_service_1, room_service_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            },
            function (room_service_1_1) {
                room_service_1 = room_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [socket_service_1.SocketService, room_service_1.RoomService, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map