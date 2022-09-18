import { z } from "zod";

export default function dealWithZodError(er: any) {
  if (er instanceof z.ZodError) {
    alert(
      JSON.stringify(
        er.issues.map((is) => {
          return { [is.path.toString()]: is["message"] };
        }),
        null,
        5
      )
    );
    return true;
  }
  return false;
}
