import {Component, ElementRef, Input, AfterViewInit,OnChanges} from 'angular2/core';

@Component({
  selector: 'flot',
  template: `<div>loading</div>`
})

export class FlotCmp  implements AfterViewInit{

 // private width = '100%';
 // private height = 220;
  public myplot:any;
  static chosenInitialized = false;
  
  @Input() private  options: any;
  @Input() private  dataset:any;
  @Input() private  width:string;
  @Input() private  height:string;
      
   
  constructor(public el: ElementRef) {}
    
  
  
  ngAfterViewInit() {
      if(!FlotCmp.chosenInitialized) {
        let plotArea = $(this.el.nativeElement).find('div').empty();
        plotArea.css({
            width: this.width, 
            height: this.height
        });
        this.myplot = $.plot( plotArea, this.dataset, this.options);    
        FlotCmp.chosenInitialized = true;
      }
  } 
  
 ngOnChanges(changes) {
     
      
      
         if(FlotCmp.chosenInitialized){
 
             this.myplot.setData(this.dataset);
             
            // this.myplot.setupGrid();
                this.myplot.draw();
         }
       // this.plot.draw();
     
  }
}  

                