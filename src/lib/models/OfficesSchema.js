const mongoose = require("mongoose");

const OfficesSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }

});

export default mongoose.models.Contact ||
  mongoose.model("Office", OfficesSchema);
