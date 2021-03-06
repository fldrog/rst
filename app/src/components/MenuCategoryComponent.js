System.register(['angular2/core', './MenuItemComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, MenuItemComponent_1;
    var MenuCategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MenuItemComponent_1_1) {
                MenuItemComponent_1 = MenuItemComponent_1_1;
            }],
        execute: function() {
            MenuCategoryComponent = (function () {
                function MenuCategoryComponent() {
                }
                MenuCategoryComponent = __decorate([
                    core_1.Component({
                        selector: 'menuCategory',
                        inputs: ['menuCategory'],
                        directives: [MenuItemComponent_1.MenuItemComponent],
                        templateUrl: 'app/src/templates/menuCategoryComponent.htm'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuCategoryComponent);
                return MenuCategoryComponent;
            })();
            exports_1("MenuCategoryComponent", MenuCategoryComponent);
        }
    }
});
//# sourceMappingURL=MenuCategoryComponent.js.map