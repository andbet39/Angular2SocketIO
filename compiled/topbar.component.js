System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var TopBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TopBarComponent = (function () {
                function TopBarComponent() {
                }
                TopBarComponent.prototype.ngAfterViewInit = function () {
                    $('#main_search_btn').on('click', function (e) {
                        e.preventDefault();
                        altair_main_header.search_show();
                    });
                    // hide main search
                    $(document).on('click keydown', function (e) {
                        if ($body.hasClass('main_search_active')) {
                            if ((!$(e.target).closest('.header_main_search_form').length && !$(e.target).closest('#main_search_btn').length)
                                || (e.which == 27)) {
                                altair_main_header.search_hide();
                            }
                        }
                    });
                    $('.header_main_search_close').on('click', function () {
                        altair_main_header.search_hide();
                    });
                    $('#full_screen_toggle').on('click', function (e) {
                        e.preventDefault();
                        screenfull.toggle();
                    });
                };
                TopBarComponent = __decorate([
                    core_1.Component({
                        selector: 'topbar',
                        templateUrl: 'app/views/topbar.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopBarComponent);
                return TopBarComponent;
            }());
            exports_1("TopBarComponent", TopBarComponent);
        }
    }
});
//# sourceMappingURL=topbar.component.js.map