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
    var FlotRTCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FlotRTCmp = (function () {
                function FlotRTCmp(el) {
                    this.el = el;
                    this.dataset = [];
                    this.points = 100;
                    this.min = 0;
                    this.max = 50;
                    this._graphData = [];
                    this._graphData.push([0, this.min]);
                    for (var i = 1; i < this.points - 1; i++) {
                        this._graphData.push([i, 25]);
                    }
                    this._graphData.push([this.points, this.max]);
                    this.dataset = [{ label: "line1",
                            color: "red",
                            data: this._graphData }];
                }
                FlotRTCmp.prototype.ngAfterViewInit = function () {
                    if (!FlotRTCmp.chosenInitialized) {
                        var plotArea = $(this.el.nativeElement).find('div').empty();
                        plotArea.css({
                            width: this.width,
                            height: this.height
                        });
                        this.myplot = $.plot(plotArea, this.dataset, this.options);
                        FlotRTCmp.chosenInitialized = true;
                    }
                };
                FlotRTCmp.prototype.ngOnChanges = function (changes) {
                    console.log(changes);
                    if (FlotRTCmp.chosenInitialized) {
                        this._graphData.shift();
                        this._graphData.push(this.newdata);
                        var newData = [];
                        this._graphData.forEach(function (d, i) {
                            newData.push([i + 1, d]);
                        });
                        this.dataset = [{ label: "line1",
                                color: "red",
                                data: newData }];
                        this.myplot.setData(this.dataset);
                        this.myplot.draw();
                    }
                };
                FlotRTCmp.chosenInitialized = false;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FlotRTCmp.prototype, "options", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], FlotRTCmp.prototype, "newdata", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], FlotRTCmp.prototype, "points", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], FlotRTCmp.prototype, "min", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], FlotRTCmp.prototype, "max", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FlotRTCmp.prototype, "width", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FlotRTCmp.prototype, "height", void 0);
                FlotRTCmp = __decorate([
                    core_1.Component({
                        selector: 'flotrt',
                        template: "<div>loading</div>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], FlotRTCmp);
                return FlotRTCmp;
            })();
            exports_1("FlotRTCmp", FlotRTCmp);
        }
    }
});
//# sourceMappingURL=flotRT.js.map