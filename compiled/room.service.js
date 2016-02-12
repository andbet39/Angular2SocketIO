System.register(['angular2/core', './room', 'rxjs/Observable', 'rxjs/add/operator/share', 'rxjs/add/operator/map', 'angular2/http'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, room_1, Observable_1, http_1;
    var RoomService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (room_1_1) {
                room_1 = room_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RoomService = (function () {
                function RoomService(http) {
                    var _this = this;
                    this.http = http;
                    this.rooms$ = new Observable_1.Observable(function (observer) {
                        return _this._roomsObserver = observer;
                    }).share();
                    this._dataStore = { rooms: [] };
                }
                RoomService.prototype.addRoom = function (room) {
                    console.log("RoomService => addRoom");
                    this._dataStore.rooms.push(room);
                    this._roomsObserver.next(this._dataStore.rooms);
                };
                RoomService.prototype.loadRooms = function () {
                    var _this = this;
                    this.http.get('http://10.0.0.1:3000/api/rooms')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        console.log(data);
                        _this._dataStore.rooms = [];
                        data.forEach(function (room) {
                            _this._dataStore.rooms.push(new room_1.Room(room.id, room.name));
                        });
                        _this._roomsObserver.next(_this._dataStore.rooms);
                    }, function (err) { console.log(err); });
                };
                RoomService.prototype.createRoom = function (roomname) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    console.log("Roomservice => saveRoom");
                    this.http.post('http://10.0.0.1:3000/api/rooms', JSON.stringify({ 'name': roomname }), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
                    ;
                };
                RoomService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RoomService);
                return RoomService;
            }());
            exports_1("RoomService", RoomService);
        }
    }
});
//# sourceMappingURL=room.service.js.map