const users = [
  { name: 'mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toah', premium: true },
  { name: 'peach', premium: false },
]

// Named Export
// export const getPremUsers = (users) => {
//   return users.filter(user => user.premium)
// }

// Default Export
// export default users

// Alternative way of exporting
const getPremUsers = (users) => {
  return users.filter(user => user.premium)
}

export {getPremUsers, users as default}