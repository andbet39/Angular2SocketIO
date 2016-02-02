import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {SocketService} from './socket.service'
import {RoomService} from './room.service'
import {Http,HTTP_PROVIDERS} from 'angular2/http'

bootstrap(AppComponent,[SocketService,RoomService,HTTP_PROVIDERS]);
