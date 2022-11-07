const { User, Rol } = require("../../../db");

const auth0db = async (req, res) => {
  const { first_name, last_name, picture_profile, email, sid, social } =
    req.body;
  try {
    const userDb = await User.findOne({
      where: { email },
      include: [Rol],
    });
    if (userDb && userDb.dataValues) {
      await userDb.update({ sid });
      return res.status(200).json({
        userDb: {
          first_name: userDb.dataValues.first_name,
          last_name: userDb.dataValues.last_name,
          email: userDb.dataValues.email,
          sid,
          id: userDb.dataValues.id,
          profile_picture: JSON.parse(userDb.dataValues.profile_picture)
            .secure_url,
          birth_date: userDb.dataValues.birth_date,
        },
        roles: userDb.dataValues.rols.map((r) => r.type),
      });
    } else {
      const newUser = await User.create({
        first_name,
        last_name,
        email,
        profile_picture: { secure_url: picture_profile, public_id: null },
        social,
        sid,
      });
      await newUser.setRols(2); // user role on first time
      const newUserWithRole = await User.findOne({
        where: { email: newUser.dataValues.email },
        include: [Rol],
      });
      return res.status(200).json({
        newUser: {
          ...newUser.dataValues,
          profile_picture: JSON.parse(newUser.dataValues.profile_picture)
            .secure_url,
        },
        roles: newUserWithRole.dataValues.rols.map((r) => r.type),
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e);
  }
};

module.exports = { auth0db };
