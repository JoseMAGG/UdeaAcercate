"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let AttendeeUpdateManyMutationInput = class AttendeeUpdateManyMutationInput {
};
exports.AttendeeUpdateManyMutationInput = AttendeeUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AttendeeUpdateManyMutationInput.prototype, "dateTime", void 0);
exports.AttendeeUpdateManyMutationInput = AttendeeUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateManyMutationInput", {})
], AttendeeUpdateManyMutationInput);