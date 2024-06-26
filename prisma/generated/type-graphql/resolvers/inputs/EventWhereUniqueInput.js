"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeListRelationFilter_1 = require("../inputs/AttendeeListRelationFilter");
const EventWhereInput_1 = require("../inputs/EventWhereInput");
const InformationRelationFilter_1 = require("../inputs/InformationRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let EventWhereUniqueInput = class EventWhereUniqueInput {
};
exports.EventWhereUniqueInput = EventWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventWhereUniqueInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput_1.EventWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput_1.EventWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput_1.EventWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereUniqueInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereUniqueInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], EventWhereUniqueInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationRelationFilter_1.InformationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationRelationFilter_1.InformationRelationFilter)
], EventWhereUniqueInput.prototype, "info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeListRelationFilter_1.AttendeeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeListRelationFilter_1.AttendeeListRelationFilter)
], EventWhereUniqueInput.prototype, "attendees", void 0);
exports.EventWhereUniqueInput = EventWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventWhereUniqueInput", {})
], EventWhereUniqueInput);
