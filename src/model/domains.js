const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DomainNameSchema = new Schema(
  {
    siteUrl: {
      type: String,
      default: "https://pushgeek.com",
      require: true,
      lowercase: true,
      unique: true
    },
    siteImages: String,
    siteId: Number,
    startTime: {
      type: Date,
      default: Date.now
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
        autopopulate: { maxDepth: 2 }
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Domains = mongoose.model("domains", DomainNameSchema);
module.exports = Domains;
// export const Domains = model('domains', DomainNameSchema);