import {bootstrap}    from 'angular2/platform/browser'
import {SensorViewComponent} from './sensor.component'
import {SensorService} from './sensor.service'
import {Http,HTTP_PROVIDERS} from 'angular2/http'

bootstrap(SensorViewComponent,[SensorService,HTTP_PROVIDERS]);
