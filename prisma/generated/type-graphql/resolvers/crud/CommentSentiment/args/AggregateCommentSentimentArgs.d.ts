import { CommentSentimentOrderByWithRelationInput } from "../../../inputs/CommentSentimentOrderByWithRelationInput";
import { CommentSentimentWhereInput } from "../../../inputs/CommentSentimentWhereInput";
import { CommentSentimentWhereUniqueInput } from "../../../inputs/CommentSentimentWhereUniqueInput";
export declare class AggregateCommentSentimentArgs {
    where?: CommentSentimentWhereInput | undefined;
    orderBy?: CommentSentimentOrderByWithRelationInput[] | undefined;
    cursor?: CommentSentimentWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}