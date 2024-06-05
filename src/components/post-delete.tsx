'use client'

import { deletePost } from "@/app/actions/posts";

interface PostDeleteProps {
    id: string,
}

export default function PostDelete({ id }: PostDeleteProps) {
    const deleteAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        deletePost(id);
    };

    return (
        <form onSubmit={deleteAction}>
    <button type="submit" className="text-sm opacity-30 text-red-600 font-bold border border-black rounded px-2 py-1">Delete</button>
</form>

    );
}
