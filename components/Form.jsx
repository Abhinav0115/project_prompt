import Link from "next/link";
import React from "react";

const Form = ({ type, handlerSubmit, post, setPost, submitting }) => {
    return (
        <>
            <section className="w-full max-w-full flex-start items-start flex-col">
                
                    <h1 className="head_text text-left">
                        <span className="blue_gradient">{type} Post</span>
                    </h1>
                    <p className="desc text-left max-w-full">
                        {type} and share amazing prompts with the world, and let
                        your imagination run wild with any Al-powered platform.
                    </p>
                    <form
                        action=""
                        method="post"
                        onSubmit={handlerSubmit}
                        className="mt-9 w-full gap-7 max-w-2xl flex-col glassmorphism mb-5"
                    >
                        <label htmlFor="">
                            <span className="font-satoshi font-semibold text-base text-gray-700">
                                Your AI Prompt
                            </span>
                            <textarea
                                name="prompt"
                                id=""
                                cols="30"
                                rows="5"
                                className="form_textarea"
                                value={post.prompt}
                                onChange={(e) =>
                                    setPost({ ...post, prompt: e.target.value })
                                }
                                placeholder="Write your prompt here..."
                                required
                            ></textarea>
                        </label>
                        <label htmlFor="">
                            <span className="font-satoshi font-semibold text-base text-gray-700">
                                Tag
                                <span className="font-normal text-gray-400">
                                    {" "}
                                    ( product, webdevelopment, idea)
                                </span>
                            </span>
                            <input
                                className="form_input"
                                value={post.tag}
                                onChange={(e) =>
                                    setPost({ ...post, tag: e.target.value })
                                }
                                placeholder="tag"
                                required
                            ></input>
                        </label>
                        <div className="flex-end mx-3  gap-4 mt-3">
                            <Link href={"/"} className="text-gray-500">
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="px-5 py-2 text-sm bg-primary-orange rounded-full text-white uppercase"
                            >
                                {submitting ? `${type}...` : type}
                            </button>
                        </div>
                    </form>
            </section>
        </>
    );
};

export default Form;
