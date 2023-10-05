"use client";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import { AiFillTag } from "react-icons/ai";

const PromptCard = ({ post, handleTagClick, handleDelete, handleEdit }) => {
    const router = useRouter();
    const pathName = usePathname();
    const [copied, setCopied] = useState("");

    const { data: session } = useSession();

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => {
            setCopied("");
        }, 3000);
    };

    const handleProfleClick = () => {
        if (post.creator._id === session?.user.id)
            return router.push("/profile");

        router.push(
            `/profile/${post.creator._id}?name=${post.creator.username}`
        );
    };

    const hashedEmail =
        post?.creator.email.slice(0, 5) + "***" + post?.creator.email.slice(-8);

    return (
        <div className="prompt_card bg-Lang-Lavender">
            <div className="flex justify-between items-start gap-5">
                <div
                    className="flex flex-1 cursor-pointer items-center justify-start gap-3"
                    onClick={handleProfleClick}
                >
                    <Image
                        className="rounded-full object-contain"
                        width={40}
                        height={40}
                        src={post?.creator.image}
                        alt="user_image"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-satoshi text-gray-800 font-semibold">
                            {post?.creator.username}
                        </h3>
                        <p className="font-inter text-gray-400 text-sm">
                            {post?.creator.email === session?.user.email
                                ? post?.creator.email
                                : hashedEmail}
                        </p>
                    </div>
                </div>
                <div className="copy_btn" onClick={handleCopy}>
                    <Image
                        src={
                            copied === post.prompt
                                ? "/assets/icons/tick.svg"
                                : "/assets/icons/copy.svg"
                        }
                        alt="copy"
                        width={12}
                        height={12}
                    />
                </div>
            </div>
            <p className="my-4 font-satoshi text-sm text-gray-800 first-letter:capitalize">
                {post.prompt}
            </p>
            <p
                className="font-inte text-sm cursor-pointer flex flex-row bg-gray-300 w-fit rounded p-1 pr-2 text-teal-800 font-semibold capitalize"
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                <AiFillTag className="text-orange-500 mr-2 text-xl" />{" "}
                {post.tag}
            </p>

            {session?.user.id === post.creator._id &&
                pathName === "/profile" && (
                    <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
                        <p
                            className="font-inter text-sm green_gradient cursor-pointer"
                            onClick={handleEdit}
                        >
                            Edit
                        </p>
                        <p
                            className="font-inter text-sm orange_gradient cursor-pointer"
                            onClick={handleDelete}
                        >
                            Delete
                        </p>
                    </div>
                )}
        </div>
    );
};

export default PromptCard;
