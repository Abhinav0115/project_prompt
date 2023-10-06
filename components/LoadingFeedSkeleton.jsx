import React from "react";

const Prompt_Card = () => {
    return (
        <div className="w-full skeleton_card skeleton-prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex flex-1 items-center justify-start gap-3">
                    <div className="h-[3.5rem] w-[3.5rem] skeleton rounded-full"></div>
                    <div className="flex flex-col">
                        <div className="w-[12rem] skeleton skeleton_height rounded-xl mb-0.5" />
                        <div className="w-[12rem] skeleton skeleton_height rounded-xl" />
                    </div>
                </div>
                <div className="h-[1.5rem] w-[1.5rem] skeleton rounded-full"></div>
            </div>
            <div className="skeleton skeleton_height rounded-xl mt-2 w-full" />
            <div className="skeleton skeleton_height rounded-xl mt-2 w-full" />
            <div className="w-1/2 skeleton skeleton_height rounded-xl mt-2 " />
            <div className="w-1/4 skeleton skeleton_height rounded-xl mt-2 " />

            <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
                <div className="w-1/5 skeleton skeleton_height rounded-xl mt-2 " />
                <div className="w-1/5 skeleton  skeleton_height rounded-xl mt-2 " />
            </div>
        </div>
    );
};

const PromptCardList = () => {
    return (
        <div className="mt-16 prompt_layout">
            {[...new Array(8)].map((post) => (
                <Prompt_Card />
            ))}
        </div>
    );
};
const Loading = () => {
    // return <span className="loading loading-spinner text-warning"></span>;
    return (
        <>
            <section className="feed">
                {/* <form action="" className="w-full flex-center relative">
                    <input className="skeleton skeleton-search_input peer" />
                </form> */}
                <PromptCardList />
            </section>
        </>
    );
};

export default Loading;
