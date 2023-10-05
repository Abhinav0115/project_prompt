"use client";
import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const EditPrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");

    useEffect(() => {
        const getPromptDetails = async () => {
            const res = await fetch(`/api/prompt/${promptId}`);
            const data = await res.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
        };

        if (promptId) {
            getPromptDetails();
        }
    }, [promptId]);

    const router = useRouter();

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) {
            return alert("Prompt id not found");
            // return router.push("/");
        }

        try {
            const res = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
                // headers: {
                //     "Content-Type": "application/json",
                // },
            });
            if (res.ok) {
                router.push("/profile");
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
                type="Edit"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handlerSubmit={updatePrompt}
            />
        </div>
    );
};

export default EditPrompt;
