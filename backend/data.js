import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Krzys",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Krzys1",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  recipes: [
    {
      name: "spaghetti",
      image: "../frontend/public/images/spaghetti.jpg",
    },
    {
      name: "chickenrice",
      image: "../frontend/public/images/chickenrice.jpg",
    },
  ],
};

export default data;
