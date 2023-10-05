import mongoose from "mongoose";

let isConected = false;

export const connectDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConected) {
        console.log("Database already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConected = true;
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};
