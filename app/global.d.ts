import type { Database as DB} from "@/types_db";

declare global{
    type Database = DB;
    type Profile = DB['public']['Tables']['profiles']['Row']
}