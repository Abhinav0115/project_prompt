"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    // console.log("post --> ", post);

    const { data: session } = useSession();
    const router = useRouter();

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch("/api/prompt/new", {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                }),
                // headers: {
                //     "Content-Type": "application/json",
                // },
            });
            if (res.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div>
            <Form
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handlerSubmit={createPrompt}
            />
        </div>
    );
};

export default CreatePrompt;
