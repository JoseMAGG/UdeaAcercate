"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSentimentFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSentimentFilter_1 = require("../inputs/NestedEnumSentimentFilter");
const Sentiment_1 = require("../../enums/Sentiment");
let EnumSentimentFilter = exports.EnumSentimentFilter = class EnumSentimentFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSentimentFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sentiment_1.Sentiment], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSentimentFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sentiment_1.Sentiment], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSentimentFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSentimentFilter_1.NestedEnumSentimentFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSentimentFilter_1.NestedEnumSentimentFilter)
], EnumSentimentFilter.prototype, "not", void 0);
exports.EnumSentimentFilter = EnumSentimentFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSentimentFilter", {})
], EnumSentimentFilter);
