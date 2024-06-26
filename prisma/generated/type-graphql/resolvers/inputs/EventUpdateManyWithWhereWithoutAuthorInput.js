"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventScalarWhereInput_1 = require("../inputs/EventScalarWhereInput");
const EventUpdateManyMutationInput_1 = require("../inputs/EventUpdateManyMutationInput");
let EventUpdateManyWithWhereWithoutAuthorInput = class EventUpdateManyWithWhereWithoutAuthorInput {
};
exports.EventUpdateManyWithWhereWithoutAuthorInput = EventUpdateManyWithWhereWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventScalarWhereInput_1.EventScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventScalarWhereInput_1.EventScalarWhereInput)
], EventUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateManyMutationInput_1.EventUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateManyMutationInput_1.EventUpdateManyMutationInput)
], EventUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
exports.EventUpdateManyWithWhereWithoutAuthorInput = EventUpdateManyWithWhereWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateManyWithWhereWithoutAuthorInput", {})
], EventUpdateManyWithWhereWithoutAuthorInput);
