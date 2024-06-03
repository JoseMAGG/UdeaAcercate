"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCommentSentimentOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
let FindUniqueCommentSentimentOrThrowArgs = class FindUniqueCommentSentimentOrThrowArgs {
};
exports.FindUniqueCommentSentimentOrThrowArgs = FindUniqueCommentSentimentOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], FindUniqueCommentSentimentOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueCommentSentimentOrThrowArgs = FindUniqueCommentSentimentOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCommentSentimentOrThrowArgs);