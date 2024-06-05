"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCommentSentimentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCommentSentimentArgs_1 = require("./args/DeleteOneCommentSentimentArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const helpers_1 = require("../../../helpers");
let DeleteOneCommentSentimentResolver = class DeleteOneCommentSentimentResolver {
    async deleteOneCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneCommentSentimentResolver = DeleteOneCommentSentimentResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCommentSentimentArgs_1.DeleteOneCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCommentSentimentResolver.prototype, "deleteOneCommentSentiment", null);
exports.DeleteOneCommentSentimentResolver = DeleteOneCommentSentimentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], DeleteOneCommentSentimentResolver);
