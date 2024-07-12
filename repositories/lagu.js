import { dbPool } from "../utils/dbcon.js";

async function createLagu(judul, durasi, is_favorite) {
  try {
    let query =
      "INSERT INTO lagu (judul, durasi, is_favorite) values ('" +
      judul +
      "','" +
      durasi +
      "', " +
      is_favorite +
      ")";
    console.log(query);
    const [result] = await dbPool.query(query);
    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

async function getLagu() {
  try {
    let query = "SELECT * FROM lagu";
    const [result] = await dbPool.query(query);
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateLagu(id, judul, durasi, is_favorite) {
  try {
    let query =
      "UPDATE lagu SET judul = '" +
      judul +
      "', durasi = '" +
      durasi +
      "', is_favorite = " +
      is_favorite +
      " WHERE id = " +
      id;
    const [result] = await dbPool.query(query);
    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

async function deleteLagu(id) {
  try {
    let query = "DELETE FROM lagu WHERE id = " + id;
    const [result] = await dbPool.query(query);
    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

async function createUser(username, pass) {
  try {
    // let query = "INSERT INTO user (username, password) values ('"+username+"','"+pass+"')";
    // console.log(query);
    // const [result] = await dbPool.query(query)
    let query = "INSERT INTO user (username,password) values (?,?)";
    const [result] = await dbPool.query(query, [username, pass]);
    // console.log(result);
    console.log(result.affectedRows);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
}

export { createLagu, getLagu, updateLagu, deleteLagu, createUser };
