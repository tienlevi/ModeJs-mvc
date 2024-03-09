import mongoose from "mongoose";

async function Connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://tienlienha123:tien2004@nodejs-mvc.aioglxf.mongodb.net/"
    );
    console.log("Connect successfully");
  } catch (error) {
    console.log(error);
    console.log("Connect failed");
  }
}

export default Connect;
