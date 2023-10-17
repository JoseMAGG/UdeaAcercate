"use strict";
var NestedEnumTagWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTagWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTagFilter_1 = require("../inputs/NestedEnumTagFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Tag_1 = require("../../enums/Tag");
let NestedEnumTagWithAggregatesFilter = exports.NestedEnumTagWithAggregatesFilter = NestedEnumTagWithAggregatesFilter_1 = class NestedEnumTagWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumTagWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tag_1.Tag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTagWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tag_1.Tag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTagWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTagWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTagWithAggregatesFilter)
], NestedEnumTagWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumTagWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTagFilter_1.NestedEnumTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTagFilter_1.NestedEnumTagFilter)
], NestedEnumTagWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTagFilter_1.NestedEnumTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTagFilter_1.NestedEnumTagFilter)
], NestedEnumTagWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumTagWithAggregatesFilter = NestedEnumTagWithAggregatesFilter = NestedEnumTagWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumTagWithAggregatesFilter", {})
], NestedEnumTagWithAggregatesFilter);
