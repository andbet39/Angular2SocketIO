System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FlotCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FlotCmp = (function () {
                function FlotCmp(el) {
                    this.el = el;
                }
                FlotCmp.prototype.ngAfterViewInit = function () {
                    if (!FlotCmp.chosenInitialized) {
                        var plotArea = $(this.el.nativeElement).find('div').empty();
                        plotArea.css({
                            width: this.width,
                            height: this.height
                        });
                        this.myplot = $.plot(plotArea, this.dataset, this.options);
                        FlotCmp.chosenInitialized = true;
                    }
                };
                FlotCmp.prototype.ngOnChanges = function (changes) {
                    if (FlotCmp.chosenInitialized) {
                        this.myplot.setData(this.dataset);
                        // this.myplot.setupGrid();
                        this.myplot.draw();
                    }
                    // this.plot.draw();
                };
                FlotCmp.chosenInitialized = false;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FlotCmp.prototype, "options", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FlotCmp.prototype, "dataset", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FlotCmp.prototype, "width", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FlotCmp.prototype, "height", void 0);
                FlotCmp = __decorate([
                    core_1.Component({
                        selector: 'flot',
                        template: "<div>loading</div>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], FlotCmp);
                return FlotCmp;
            })();
            exports_1("FlotCmp", FlotCmp);
        }
    }
});
//# sourceMappingURL=flot.js.map