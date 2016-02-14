import {Component, ElementRef, Input, AfterViewInit,OnChanges} from 'angular2/core';
import {SimpleChange} from 'angular2/core';


@Component({
  selector: 'flotrt',
  template: `<div>loading</div>`
})

export class FlotRTCmp  implements AfterViewInit{

  public myplot:any;

  static chosenInitialized = false;
  private dataset:any =[];
  private _graphData:any;
 
  
  @Input() private  options: any;
  @Input() private  newdata:number;  
  @Input() private  points:number=100;  
  @Input() private  min:number;
  @Input() private  max:number;
  @Input() private  width:string;
  @Input() private  height:string;
      
   
  constructor(public el: ElementRef) {

      this.generateRandom();

      FlotRTCmp.chosenInitialized=false;
                             
      
  }

    generateRandom(){
        console.log("generate Random graph");

        this._graphData = [];
        this._graphData.push([0,this.min]);
        for(var i=1;i<this.points-1;i++){
            this._graphData.push([i,this.max]);

        }
        this._graphData.push([this.points,this.max]);

        this.dataset = [{label: "line1",
            color:"red",
            data:   this._graphData}];

        console.log(this._graphData);
    }
  
  
  ngAfterViewInit() {
      if(!FlotRTCmp.chosenInitialized) {
  
        let plotArea = $(this.el.nativeElement).find('div').empty();
  
        plotArea.css({
            width: this.width, 
            height: this.height
        });
        
       
        this.myplot = $.plot( plotArea, this.dataset, this.options);    
        FlotRTCmp.chosenInitialized = true;
      }
  } 
  
 ngOnChanges(changes: {[propName: string]: SimpleChange}) {
      console.log(changes);



       if(FlotRTCmp.chosenInitialized){
             this._graphData.shift();
             this._graphData.push(this.newdata);
             
             
             var newData = [];
                 this._graphData.forEach(function(d,i){
                    newData.push([i+1,d]);
                });
                
             
             this.dataset = [{label: "line1",
                        color:"red",
                        data:   newData}];

           if(this.myplot) {
               this.myplot.setData(this.dataset);
               this.myplot.draw();
               this.myplot.setupGrid();
           }

           if(changes['min'] && changes['max']){
               console.log("minmax changed");

         //     this.generateRandom();
               this.myplot.draw();
               this.myplot.setupGrid();

           }
       }


     
  }
}  

                