const { Schema, model } = require('mongoose');

const localizationSchema = new Schema(
  {
    saved_UTC_date: String,
    saved_UTC_timestamp: Date,
    last_changed_UTC_timestamp: Date,
    last_updated_UTC_timestamp: Date,
    last_changed_utc: String,
    last_updated_utc: String,
    person: String,
    latitude: Number,
    longitude: Number,
    gps_accuracy: Number,
  },
  { timestamps: true } // creating updated_at / created_at
);

const Localization = model('Localization', localizationSchema);

module.exports = {
  Localization,
};
