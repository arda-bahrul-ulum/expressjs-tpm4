import { dbPool } from "../utils/dbcon.js";

async function selectData(username) {
  try {
    let query = "SELECT * from user where username = '" + username + "'";
    console.log(query);
    const [result] = await dbPool.query(query);
    console.log("hasil query select = ", result[0]);
    if (result.length > 0) {
      console.log("test");
      return result[0];
    }
  } catch (error) {
    throw error;
  }
}

export { selectData };
