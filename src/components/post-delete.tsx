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
<button type="submit" className="text-sm opacity-90 text-white font-semibold border border-black rounded px-2 py-1 bg-red-600">Delete</button>
</form>

    );
}
