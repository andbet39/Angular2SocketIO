System.register(['angular2/core', './message', './room', './room.service', 'rxjs/Observable', 'rxjs/add/operator/share'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, message_1, room_1, room_service_1, Observable_1;
    var SocketService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (room_1_1) {
                room_1 = room_1_1;
            },
            function (room_service_1_1) {
                room_service_1 = room_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            SocketService = (function () {
                function SocketService(_roomService) {
                    var _this = this;
                    this._roomService = _roomService;
                    this.currentRoom = null;
                    console.log('Socket service constructor');
                    console.log(this._roomService);
                    this.image$ = new Observable_1.Observable(function (observer) {
                        _this._imageObserver = observer;
                    }).share();
                    this.messages$ = new Observable_1.Observable(function (observer) {
                        return _this._messagesObserver = observer;
                    }).share();
                    this._dataStore = { messages: [], image: "" };
                    this.socket = io('http://10.0.0.1:3000');
                    this.socket.on('message', this.onMessage.bind(this));
                    this.socket.on('room_created', this.onCreateRoom.bind(this));
                }
                SocketService.prototype.sendMess = function (content) {
                    console.log('Sending :' + content);
                    if (this.currentRoom != null) {
                        this.socket.emit('message', { content: content, room: this.currentRoom.name });
                    }
                    else {
                        this.socket.emit('message', { content: content });
                    }
                };
                SocketService.prototype.subscribe = function (room) {
                    this.currentRoom = room;
                    this.socket.emit('subscribe', this.currentRoom.name);
                };
                SocketService.prototype.onMessage = function (message) {
                    console.log("received:" + message.content);
                    this._dataStore.messages.push(new message_1.Message(message.content));
                    this._messagesObserver.next(this._dataStore.messages);
                };
                SocketService.prototype.onCreateRoom = function (room) {
                    console.log("onCreateRoom");
                    console.log(room);
                    console.log(this._roomService);
                    this._roomService.addRoom(new room_1.Room(room.id, room.name));
                };
                SocketService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [room_service_1.RoomService])
                ], SocketService);
                return SocketService;
            })();
            exports_1("SocketService", SocketService);
        }
    }
});
//# sourceMappingURL=socket.service.1.js.map