import { database } from "./database_config";
import { get, ref } from "firebase/database";

export default defineEventHandler(async (event) => {
  const req = await readBody(event);
  const account_name_ref = ref(database, req.message);
  async function fetchData() {
    try {
      const snapshot = await get(account_name_ref);
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val()
      } else {
        console.log("No data available");
        return ''
      }
    } catch (error) {
      console.error(error);
      return error
    }
  }
  return await fetchData()
});