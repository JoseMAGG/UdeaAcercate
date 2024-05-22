"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneAccountArgs_1 = require("./args/UpsertOneAccountArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let UpsertOneAccountResolver = exports.UpsertOneAccountResolver = class UpsertOneAccountResolver {
    async upsertOneAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).account.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAccountArgs_1.UpsertOneAccountArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneAccountResolver.prototype, "upsertOneAccount", null);
exports.UpsertOneAccountResolver = UpsertOneAccountResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], UpsertOneAccountResolver);
