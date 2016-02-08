System.register(['angular2/core', './socket.service', './room.service', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, socket_service_1, room_service_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            },
            function (room_service_1_1) {
                room_service_1 = room_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_roomService, _socketService) {
                    this._roomService = _roomService;
                    this._socketService = _socketService;
                    this.messages = [];
                    this.rooms = [];
                    this.messageControl = new common_1.Control('');
                    this.roomControl = new common_1.Control('');
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._socketService.messages$.subscribe(function (data) {
                        console.log(data);
                        _this.messages = data;
                    });
                    this._roomService.rooms$.subscribe(function (data) {
                        _this.rooms = data;
                    });
                    this._roomService.loadRooms();
                };
                AppComponent.prototype.sendMess = function () {
                    this._socketService.sendMess(this.messageControl.value);
                };
                AppComponent.prototype.join = function (room) {
                    this._socketService.subscribe(room);
                };
                AppComponent.prototype.saveRoom = function () {
                    console.log("AppComponent => SaveRoom : " + this.roomControl.value);
                    this._roomService.createRoom(this.roomControl.value);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        //    providers:[SocketService,RoomService],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [room_service_1.RoomService, socket_service_1.SocketService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.1.js.map