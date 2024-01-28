const mongoose = require("mongoose");
const dbUri = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://laca:jae09908@cluster0.gjxhg.mongodb.net/twitter",
      {
        //useCreatendex: true,
        //useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("db connect");
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};
module.exports = dbUri;
