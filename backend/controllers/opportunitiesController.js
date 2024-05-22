const Opportunity = require("../models/opportunity");

const allOpportunity = async (req, res) => {
  const opportunity = await Opportunity.find();

  res.json({ opportunity: opportunity });
};

const getOpportunity = async (req, res) => {
  const opportunityId = req.params.id;
  const opportunity = await Opportunity.findById(opportunityId);

  res.json({ pportunity: opportunity });
};

const addOpportunity = async (req, res) => {
  const { name, address, status, tag, price, closingDate, expiringDate } =
    req.body;
  const opportunity = await Opportunity.create({
    name: name,
    address: address,
    status: status,
    tag: tag,
    price: price,
    closingDate: closingDate,
    expiringDate: expiringDate,
  });

  res.json({ opportunity: opportunity });
};

const updateOpportunity = async (req, res) => {
  const opportunityId = req.params.id;

  const { name, address, status, tag, price, closingDate, expiringDate } =
    req.body;
  const opportunity = await Opportunity.findByIdAndUpdate(
    opportunityId,
    {
      name: name,
      address: address,
      status: status,
      tag: tag,
      price: price,
      closingDate: closingDate,
      expiringDate: expiringDate,
    },
    { new: true }
  );

  res.json({ opportunity: opportunity });
};

const deleteOpportunity = async (req, res) => {
  const opportunityId = req.params.id;
  await Opportunity.findByIdAndDelete(opportunityId);

  res.json({ success: "opportunity record has been deleted successfully" });
};

module.exports = {
  allOpportunity,
  getOpportunity,
  addOpportunity,
  updateOpportunity,
  deleteOpportunity,
};
