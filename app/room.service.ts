import {Injectable} from 'angular2/core';
import {Room} from './room';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {Http,HTTP_PROVIDERS,Headers} from 'angular2/http'


@Injectable()
export class RoomService  {
  rooms$: Observable<Array<Room>>;

      private _roomsObserver: any;
      private _dataStore: {
          rooms: Array<Room>
      };

      constructor(public http:Http) {
          this.rooms$ = new Observable(observer =>
              this._roomsObserver = observer).share();
          this._dataStore = { rooms: [] };
      }

      addRoom(room:Room){
          console.log("RoomService => addRoom");
          this._dataStore.rooms.push(room);
          this._roomsObserver.next(this._dataStore.rooms);
      }

      loadRooms(){
        this.http.get('http://10.0.0.1:3000/api/rooms')
              .map(res => res.json())
              .subscribe(
                  data => {
                    console.log(data);
                      this._dataStore.rooms=[];
                      data.forEach(room =>{
                          this._dataStore.rooms.push(new Room(room.id,room.name));
                      })
                      this._roomsObserver.next(this._dataStore.rooms);
                  },
                  err => {console.log (err)}
                  );
      }

      createRoom(roomname:string){

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        console.log("Roomservice => saveRoom");
        this.http.post('http://10.0.0.1:3000/api/rooms',JSON.stringify({'name':roomname}),{headers:headers})
        .map(res => res.json())
        .subscribe(
          data => console.log(data),
          err => console.log(err)
        );;
      }



}
