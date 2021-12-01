const findUserByEmail = (email, users) => {
  // if user email exists, return user
  // if user mail does not exists, return null
  for (const userId in users) {
    const user = users[userId]; // users['abc']
    if (user.email === email) {
      return user
    }
  }

  return null;
}

module.exports = { findUserByEmail };