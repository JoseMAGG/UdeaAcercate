"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneAttendeeArgs_1 = require("./args/CreateOneAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const helpers_1 = require("../../../helpers");
let CreateOneAttendeeResolver = class CreateOneAttendeeResolver {
    async createOneAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneAttendeeResolver = CreateOneAttendeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attendee_1.Attendee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAttendeeArgs_1.CreateOneAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneAttendeeResolver.prototype, "createOneAttendee", null);
exports.CreateOneAttendeeResolver = CreateOneAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], CreateOneAttendeeResolver);
