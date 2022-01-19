module.exports = (pool) => {
  const getUsers = () => {
    const query = {
      text: 'SELECT id, email, password FROM users',
    }

    return pool
      .query(query)
      .then(result => result.rows)
      .catch(error => console.error(error.message))
  };

  const getUserById = (id) => {
    const query = {
      text: `SELECT email FROM users WHERE id = $1`,
      values: [id]
    }

    return pool
      .query(query)
      .then(result => result.rows)
      .catch(error => console.error(error.message))
  };

  return {
    getUsers,
    getUserById,
  }
}