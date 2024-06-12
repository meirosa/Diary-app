import { updatePost } from "@/app/actions/posts";
import PostForm from "@/components/post-form";
import { fetchPostById } from "@/db/queries/posts";

interface PostsEditProps {
    params: {
        id: string;
    };
}

export default async function PostsEdit({ params }: PostsEditProps) {
    const { id } = params;

    const post = await fetchPostById(id);

    const updateAction = updatePost.bind(null, id);

    return (
        <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#99dbe4' }}>
            <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <PostForm formAction={updateAction} initialData={{ title: post?.title ?? '', content: post?.content ?? '' }} />
            </div>
        </main>
    );
}
