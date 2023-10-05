import NextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google";

import { connectDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        Googleprovider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email,
            });

            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ profile }) {
            try {
                //serverless
                await connectDB();
                const userExists = await User.findOne({
                    email: profile.email,
                });
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    });
                    // session.user = newUser;
                }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        },
    },
});

export { handler as GET, handler as POST };
