import { NestedEnumTagFilter } from "../inputs/NestedEnumTagFilter";
import { NestedEnumTagWithAggregatesFilter } from "../inputs/NestedEnumTagWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumTagWithAggregatesFilter {
    equals?: "deportivo" | "academico" | "cultural" | undefined;
    in?: Array<"deportivo" | "academico" | "cultural"> | undefined;
    notIn?: Array<"deportivo" | "academico" | "cultural"> | undefined;
    not?: NestedEnumTagWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumTagFilter | undefined;
    _max?: NestedEnumTagFilter | undefined;
}
