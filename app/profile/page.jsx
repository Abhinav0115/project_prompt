"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const OwnProfile = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await res.json();

            setPosts(data);
        };

        if (session?.user.id) {
            fetchPosts();
        }
    }, []);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };
    const handleDelete = async (post) => {
        const hasConfirmed = confirm(
            "Are you sure you want to delete this prompt?"
        );
        if (!hasConfirmed) {
            return router.push("/profile");
        }
        try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
                method: "DELETE",
            });

            const filteredPosts = posts.filter((p) => p._id !== post._id);

            setPosts(filteredPosts);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Profile
                name={"My"}
                desc={"Welcome to your Personalized profile"}
                data={posts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default OwnProfile;
