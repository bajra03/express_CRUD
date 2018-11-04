import User from '../models/users';

export const register = async (req, res) => {
  const user = new User(req.body);
  const save = await user.save();

  return res.json({ data: save });
};

export const getUsers = async (req, res) => {
  const users = await User.find();

  return res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.json({ message: 'User not found!' });
  }

  return res.json(user);
};

export const deleteUser = async (req, res) => {
  const deletedUser = await User.findByIdAndDelete({ _id: req.params.id });

  return res.json(deletedUser);
};

export const updateUser = async (req, res) => {
  const data = {};

  if (req.body.name) {
    data.name = req.body.name;
  }

  if (req.body.email) {
    data.email = req.body.email;
  }

  const user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
  return res.json(user);
};
