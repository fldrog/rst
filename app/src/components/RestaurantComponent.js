System.register(['angular2/core', './MenuComponent', 'angular2/router'], function(exports_1) {
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
    var core_1, MenuComponent_1, router_1;
    var RestaurantComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MenuComponent_1_1) {
                MenuComponent_1 = MenuComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RestaurantComponent = (function () {
                function RestaurantComponent() {
                }
                RestaurantComponent = __decorate([
                    core_1.Component({
                        selector: 'restaurant',
                        inputs: ['restaurant'],
                        directives: [MenuComponent_1.MenuComponent, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/src/templates/restaurantComponent.htm'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RestaurantComponent);
                return RestaurantComponent;
            })();
            exports_1("RestaurantComponent", RestaurantComponent);
        }
    }
});
//# sourceMappingURL=RestaurantComponent.js.map