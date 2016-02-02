import {Component} from 'angular2/core';
import {SocketService} from './socket.service';
import {RoomService} from './room.service';
import {Message} from './message';
import {Room} from './room';
import {OnInit} from 'angular2/core';
import {Control,CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common'

@Component({
    selector: 'my-app',
    templateUrl:'app/app.html' ,
//    providers:[SocketService,RoomService],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]

})

export class AppComponent implements OnInit{

  messages:Array<Message>=[];
  rooms:Array<Room>=[];


  messageControl: Control = new Control('');
  roomControl: Control = new Control('');
   imgurl:string;

   constructor(private _roomService:RoomService,private _socketService:SocketService){

   }

  ngOnInit(){

      this._socketService.messages$.subscribe(
        data=>{
          console.log(data);
          this.messages=data;
        }
      )

      this._roomService.rooms$.subscribe(
        data=>{
          this.rooms = data;
        }
      )

      this._roomService.loadRooms();

   }

  sendMess(){
    this._socketService.sendMess(this.messageControl.value);
  }


  join(room:Room){
    this._socketService.subscribe(room);
  }

  saveRoom(){
    console.log("AppComponent => SaveRoom : " + this.roomControl.value);
    this._roomService.createRoom(this.roomControl.value);
  }


}
