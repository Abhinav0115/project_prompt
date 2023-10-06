"use client";
import { useState, useEffect } from "react";
import { PiPaintBrushHousehold } from "react-icons/pi";
import Loading from "@components/LoadingFeedSkeleton";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [AllPosts, setAllPosts] = useState([]);

    const filterPrompts = (searchText) => {
        const regex = new RegExp(searchText, "i");

        return AllPosts.filter(
            (post) =>
                regex.test(post.tag) ||
                regex.test(post.prompt) ||
                regex.test(post.creator.username)
        );
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchResults(searchResult);
            }, 500)
        );
    };

    const handleTagClick = (tagName) => {
        setSearchText(tagName);
        const searchResult = filterPrompts(tagName);
        setSearchResults(searchResult);
    };

    useEffect(() => {
        setIsLoading(true);
        const fetchPosts = async () => {
            const res = await fetch("/api/prompt");
            const data = await res.json();

            setAllPosts(data);
            setTimeout(() => {
                setIsLoading(false);
            }, 1800);
        };

        fetchPosts();
    }, []);

    return (
        <>
            <section className="feed">
                <form action="" className="w-full flex-center relative">
                    <input
                        type="text"
                        name=""
                        className="search_input peer mt-6"
                        id=""
                        placeholder="Search for a prompt, tag or user"
                        value={searchText}
                        onChange={handleSearchChange}
                        required
                    />
                    <div
                        className="absolute right-2 top-7 cursor-pointer rounded-full bg-transparent p-1 text-gray-400 hover:scale-110 hover:text-gray-800  -rotate-[15deg]"
                        onClick={() => setSearchText("")}
                    >
                        <PiPaintBrushHousehold className="h-6 w-6" />
                    </div>
                </form>
                {isLoading ? (
                    <Loading />
                ) : searchText ? (
                    <PromptCardList
                        data={searchResults}
                        handleTagClick={handleTagClick}
                    />
                ) : (
                    <PromptCardList
                        data={AllPosts}
                        handleTagClick={handleTagClick}
                    />
                )}
            </section>
        </>
    );
};

export default Feed;
