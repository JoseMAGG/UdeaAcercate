"use strict";
var NestedEnumRoleTagFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleTagFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleTag_1 = require("../../enums/RoleTag");
let NestedEnumRoleTagFilter = exports.NestedEnumRoleTagFilter = NestedEnumRoleTagFilter_1 = class NestedEnumRoleTagFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumRoleTagFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleTag_1.RoleTag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRoleTagFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleTag_1.RoleTag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRoleTagFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleTagFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleTagFilter)
], NestedEnumRoleTagFilter.prototype, "not", void 0);
exports.NestedEnumRoleTagFilter = NestedEnumRoleTagFilter = NestedEnumRoleTagFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumRoleTagFilter", {})
], NestedEnumRoleTagFilter);