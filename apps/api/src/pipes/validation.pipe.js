"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ValidationPipe = class ValidationPipe {
    async transform(value, { metatype }) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = (0, class_transformer_1.plainToInstance)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            throw new common_1.BadRequestException('Validation failed');
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
exports.ValidationPipe = ValidationPipe;
exports.ValidationPipe = ValidationPipe = __decorate([
    (0, common_1.Injectable)()
], ValidationPipe);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUt3QjtBQUN4QixxREFBMkM7QUFDM0MseURBQW9EO0FBRzdDLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFDekIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxRQUFRLEVBQW9CO1FBQ3hELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBQSxtQ0FBZSxFQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsMEJBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdEIsTUFBTSxJQUFJLDRCQUFtQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLFVBQVUsQ0FBQyxRQUFrQjtRQUNuQyxNQUFNLEtBQUssR0FBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YsQ0FBQTtBQWpCWSx3Q0FBYzt5QkFBZCxjQUFjO0lBRDFCLElBQUEsbUJBQVUsR0FBRTtHQUNBLGNBQWMsQ0FpQjFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUGlwZVRyYW5zZm9ybSxcbiAgSW5qZWN0YWJsZSxcbiAgQXJndW1lbnRNZXRhZGF0YSxcbiAgQmFkUmVxdWVzdEV4Y2VwdGlvbixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgcGxhaW5Ub0luc3RhbmNlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtPGFueT4ge1xuICBhc3luYyB0cmFuc2Zvcm0odmFsdWU6IGFueSwgeyBtZXRhdHlwZSB9OiBBcmd1bWVudE1ldGFkYXRhKSB7XG4gICAgaWYgKCFtZXRhdHlwZSB8fCAhdGhpcy50b1ZhbGlkYXRlKG1ldGF0eXBlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBvYmplY3QgPSBwbGFpblRvSW5zdGFuY2UobWV0YXR5cGUsIHZhbHVlKTtcbiAgICBjb25zdCBlcnJvcnMgPSBhd2FpdCB2YWxpZGF0ZShvYmplY3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFeGNlcHRpb24oJ1ZhbGlkYXRpb24gZmFpbGVkJyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdG9WYWxpZGF0ZShtZXRhdHlwZTogRnVuY3Rpb24pOiBib29sZWFuIHtcbiAgICBjb25zdCB0eXBlczogRnVuY3Rpb25bXSA9IFtTdHJpbmcsIEJvb2xlYW4sIE51bWJlciwgQXJyYXksIE9iamVjdF07XG4gICAgcmV0dXJuICF0eXBlcy5pbmNsdWRlcyhtZXRhdHlwZSk7XG4gIH1cbn0iXX0=