const userdb = require("../model/users");
const auth = require("../middleware/auth");
const createUser = async (req, res) => {
  try {
    const hashedPass = await auth.hashPassword(req.body.password);

    const newUser = new userdb({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      mail: req.body.email,
      password: hashedPass,
    });
    const existUser = await userdb.findOne({ mail: req.body.email });

    if (existUser) {
      return res
        .status(422)
        .json({ message: "User with the same email already exists" });
    }

    const user = await newUser.save();

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    console.error("Error creating user:", error);
    console.log(req.body)

    res.status(500).json({ message: "Error creating User" });
  }
};

const createLogin = async (req, res) => {
  try {
    const user = await userdb.findOne({ mail: req.body.email });
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    const validated = await auth.comparePasswords(
      req.body.password,
      user.password
    );
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }
    const token = auth.createJWT(user);
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    // console.log(token);
    res.cookie("token", token, options).status(200).json({
      sucess: "true",
      token,
      user,
      message: "User Login Successfull",
    });
    // return res.status(200).json({ msg: "Successfully Logged in" });
  } catch (err) {
    console.error("Error logging in:", err);
    return res.status(500).json(err);
  }
};

module.exports = { createUser, createLogin };
