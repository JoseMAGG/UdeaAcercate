"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTagFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tag_1 = require("../../enums/Tag");
let EnumTagFieldUpdateOperationsInput = class EnumTagFieldUpdateOperationsInput {
};
exports.EnumTagFieldUpdateOperationsInput = EnumTagFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTagFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumTagFieldUpdateOperationsInput = EnumTagFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTagFieldUpdateOperationsInput", {})
], EnumTagFieldUpdateOperationsInput);
