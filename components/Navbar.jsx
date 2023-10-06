"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProvider = async () => {
            const res = await getProviders();

            setProviders(res);
        };
        setProvider();
    }, []);

    // {
    //     alert(providers);
    //     alert(session);
    // }

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href={"/"} className="flex-center flex gap-2">
                <Image
                    className="object-contain rounded-full bg-lime-600"
                    src={"/assets/images/logo.svg"}
                    width={30}
                    height={30}
                    alt={"Prompts.ai Logo"}
                />
                <p className="logo_text text-teal-700">
                    <span className="font-semibold text-3xl relative top-0.5 right-0.5 text-Lang-Lavender  ">
                        P
                    </span>
                    rompts.ai
                </p>
            </Link>
            {/* Desktop navigation */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-2 md:gap-4">
                        <Link className="black_btn" href={"/create-prompt"}>
                            Create Post
                        </Link>
                        <button
                            type="button"
                            onClick={signOut}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link href={"/profile"}>
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                alt={"user profile"}
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    className="black_btn"
                                    onClick={() => signIn(provider.id)}
                                >
                                    Sign In{" "}
                                    <FcGoogle className="ml-2 h-6 w-6" />
                                </button>
                            ))}
                    </>
                )}
            </div>

            {/* mobile navigation */}

            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            alt={"user profile"}
                            className="rounded-full"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href={"/profile"}
                                    onClick={() => setToggleDropdown(false)}
                                    className="dropdown_link"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={"/create-prompt"}
                                    onClick={() => setToggleDropdown(false)}
                                    className="dropdown_link"
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        signOut();
                                        setToggleDropdown(false);
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    className="black_btn"
                                    onClick={() => signIn(provider.id)}
                                >
                                    Sign In{" "}
                                    <FcGoogle className="ml-2 h-6 w-6" />
                                </button>
                            ))}
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
