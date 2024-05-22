const Client = require("../models/client");

const allClient = async (req, res) => {
  const client = await Client.find();

  res.json({ client: client });
};

const getClient = async (req, res) => {
  const clientId = req.params.id;
  const client = await Client.findById(clientId);

  res.json({ client: client });
};

const addClient = async (req, res) => {
  const { name, phone, email, tag } = req.body;
  const client = await Client.create({
    name: name,
    phone: phone,
    email: email,
    tag: tag,
  });

  res.json({ client: client });
};

const updateClient = async (req, res) => {
  const clientId = req.params.id;

  const { name, phone, email, tag } = req.body;
  const client = await Client.findByIdAndUpdate(
    clientId,
    {
      name: name,
      phone: phone,
      email: email,
      tag: tag,
    },
    { new: true }
  );

  res.json({ client: client });
};

const deleteClient = async (req, res) => {
  const clientId = req.params.id;
  await Client.findByIdAndDelete(clientId);

  res.json({ success: "client record has been deleted successfully" });
};

module.exports = {
  allClient,
  getClient,
  addClient,
  updateClient,
  deleteClient,
};
