"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const InformationRelationFilter_1 = require("../inputs/InformationRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let CommentWhereInput = class CommentWhereInput {
};
exports.CommentWhereInput = CommentWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CommentWhereInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CommentWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationRelationFilter_1.InformationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationRelationFilter_1.InformationRelationFilter)
], CommentWhereInput.prototype, "info", void 0);
exports.CommentWhereInput = CommentWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentWhereInput", {})
], CommentWhereInput);
