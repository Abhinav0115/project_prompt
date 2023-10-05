import React from "react";
import Feed from "@components/Feed";

const Home = () => {
    return (
        <>
            <section className="w-full flex-center flex-col">
                <h1 className="head_text text-center">
                    Discover & Share
                    <br className="max-md:hidden" />
                    <span className="orange_gradient text-center">
                        AI-Powered Prompts
                    </span>
                </h1>
                <p className="desc text-center">
                    Prompts.ai is an open-source AI prompting tool for modern
                    world to discover, creare and share creative prompts.
                </p>
                {/* feed */}
                <Feed />
            </section>
        </>
    );
};

export default Home;
