import { NestedEnumSentimentFilter } from "../inputs/NestedEnumSentimentFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumSentimentWithAggregatesFilter {
    equals?: "Positive" | "Neutral" | "Negative" | undefined;
    in?: Array<"Positive" | "Neutral" | "Negative"> | undefined;
    notIn?: Array<"Positive" | "Neutral" | "Negative"> | undefined;
    not?: NestedEnumSentimentWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumSentimentFilter | undefined;
    _max?: NestedEnumSentimentFilter | undefined;
}