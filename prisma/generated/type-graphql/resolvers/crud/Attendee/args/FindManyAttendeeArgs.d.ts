import { AttendeeOrderByWithRelationInput } from "../../../inputs/AttendeeOrderByWithRelationInput";
import { AttendeeWhereInput } from "../../../inputs/AttendeeWhereInput";
import { AttendeeWhereUniqueInput } from "../../../inputs/AttendeeWhereUniqueInput";
export declare class FindManyAttendeeArgs {
    where?: AttendeeWhereInput | undefined;
    orderBy?: AttendeeOrderByWithRelationInput[] | undefined;
    cursor?: AttendeeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "eventId" | "dateTime"> | undefined;
}
