var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { PincodeCmp } from './pincode-component';
import { isPresent, isFunction } from 'ionic-angular/util/util';
import { ViewController } from 'ionic-angular';
/**
 * @private
 */
export var PinCode = (function (_super) {
    __extends(PinCode, _super);
    function PinCode(app, opts) {
        if (opts === void 0) { opts = {}; }
        opts.enableBackdropDismiss = isPresent(opts.enableBackdropDismiss) ?
            !!opts.enableBackdropDismiss : true;
        opts.hideForgotPassword = isPresent(opts.hideForgotPassword) ?
            !!opts.hideForgotPassword : false;
        opts.encoded = isFunction(opts.encoded) ? opts.encoded : function (c) { return c; };
        opts.title = opts.title || 'Password';
        opts.cancelButtonText = opts.cancelButtonText || 'cancel';
        opts.forgotPasswordText = opts.forgotPasswordText || 'forgot password';
        _super.call(this, PincodeCmp, opts, null);
        this._app = app;
        this.isOverlay = true;
    }
    /**
    * @private
    */
    PinCode.prototype.getTransitionName = function (direction) {
        var key = (direction === 'back' ? 'alertLeave' : 'alertEnter');
        return this._nav && this._nav.config.get(key);
    };
    PinCode.prototype.setTitle = function (title) {
        this.data.title = title;
    };
    PinCode.prototype.setCssClass = function (cssClass) {
        this.data.cssClass = cssClass;
    };
    PinCode.prototype.present = function (navOptions) {
        if (navOptions === void 0) { navOptions = {}; }
        navOptions.minClickBlockDuration = navOptions.minClickBlockDuration || 400;
        return this._app.present(this, navOptions);
    };
    return PinCode;
}(ViewController));
export var PincodeController = (function () {
    function PincodeController(_app) {
        this._app = _app;
    }
    PincodeController.prototype.create = function (opts) {
        if (opts === void 0) { opts = {}; }
        return new PinCode(this._app, opts);
    };
    PincodeController = __decorate([
        Injectable()
    ], PincodeController);
    return PincodeController;
}());
//# sourceMappingURL=pincode.js.map