import {Injectable} from 'angular2/core';
import {Message} from './message';
import {Room} from './room';
import {RoomService} from './room.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Inject } from 'angular2/core';

@Injectable()
export class SocketService  {
  messages$: Observable<Array<Message>>;
  image$ : Observable<string>;

  public currentRoom:Room=null;

      private _messagesObserver: any;
      private _imageObserver:any;

      private _dataStore: {
          messages: Array<Message>,
          image:string
      };

      private socket:any;

      constructor(private  _roomService: RoomService) {
         console.log('Socket service constructor');
         console.log(this._roomService);


          this.image$ = new Observable(observer =>{
              this._imageObserver = observer;
          }).share();

          this.messages$ = new Observable(observer =>
              this._messagesObserver = observer).share();

          this._dataStore = { messages: [],image: "" };

          this.socket = io('http://10.0.0.1:3000');
          this.socket.on('message',this.onMessage.bind(this));
          this.socket.on('room_created',this.onCreateRoom.bind(this));

      }

      sendMess(content:string){
        console.log('Sending :'+content);
        if(this.currentRoom != null){
          this.socket.emit('message',{content:content,room:this.currentRoom.name});
        }else{
          this.socket.emit('message',{content:content});

        }
      }

      subscribe(room:Room){
        this.currentRoom=room;
        this.socket.emit('subscribe',this.currentRoom.name);
      }


      onMessage(message){
        console.log("received:"+message.content);
          this._dataStore.messages.push(new Message(message.content));
          this._messagesObserver.next(this._dataStore.messages);
      }

      onCreateRoom(room){
        console.log("onCreateRoom");
        console.log(room);
        console.log(this._roomService);
        this._roomService.addRoom(new Room(room.id,room.name));
      }



}
