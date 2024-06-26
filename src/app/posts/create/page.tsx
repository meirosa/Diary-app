import { createPost } from "@/app/actions/posts";
import PostForm from "@/components/post-form";

export default function PostsCreate() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#99dbe4] p-8">
            <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <PostForm formAction={createPost} initialData={{ title: '', content: '' }} />
            </div>
        </main>
    );
}
