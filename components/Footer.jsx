"use client";
import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
    const [loadFooter, setLoadFooter] = useState(false);

    setTimeout(() => {
        setLoadFooter(true);
    }, 1000);

    return (
        loadFooter && (
            <footer className="w-[100%] border border-gray-600 pt-4 pb-1  rounded-t-xl flex max-md:flex-col  justify-around">
                <Link
                    href={"https://github.com/Abhinav0115?tab=repositories"}
                    target="_blank"
                    className="p-2 w-2/6 px-4 mb-2 flex justify-center uppercase font-pixelify font-semibold rounded-lg hover:bg-black hover:text-white border border-stone-500 max-md:w-fit max-md:mx-auto"
                >
                    Check out others project at{" "}
                    <AiOutlineGithub className="h-6 w-6 ml-1" />
                </Link>
                <Link
                    href={"https://github.com/Abhinav0115/project_prompt"}
                    target="_blank"
                    className="p-2 w-2/6 px-4 mb-2 flex justify-center uppercase font-pixelify font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border-stone-500 hover:border bg-lime-700 text-white max-md:w-fit max-md:mx-auto"
                >
                    Check out the project at{" "}
                    <AiOutlineGithub className="h-6 w-6 ml-1" />
                </Link>
            </footer>
        )
    );
};

export default Footer;
