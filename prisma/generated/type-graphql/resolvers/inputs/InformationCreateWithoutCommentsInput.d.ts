import { EventCreateNestedOneWithoutInfoInput } from "../inputs/EventCreateNestedOneWithoutInfoInput";
import { InformationCreatehashtagsInput } from "../inputs/InformationCreatehashtagsInput";
import { UserCreateNestedOneWithoutNewsCreatedInput } from "../inputs/UserCreateNestedOneWithoutNewsCreatedInput";
export declare class InformationCreateWithoutCommentsInput {
    id?: string | undefined;
    title: string;
    description: string;
    date?: Date | undefined;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural" | "Noticia";
    hashtags?: InformationCreatehashtagsInput | undefined;
    official?: boolean | undefined;
    author?: UserCreateNestedOneWithoutNewsCreatedInput | undefined;
    event?: EventCreateNestedOneWithoutInfoInput | undefined;
}
