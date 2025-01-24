import getAllBlogs from "@/lib/getAllBlogs";
import Link from "next/link";

export default async function Home() {

  const blogs = await getAllBlogs()

  return (
    <div className="w-[80%] mx-auto mt-6">
      <h1 className="text-3xl font-bold text-center mb-8 border-b-2 p-4 w-fit mx-auto">Checkout Our Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {
          blogs.map(blog => 
          <li key={blog.id}>
            <Link href={`/${blog.id}`}>
            {blog.title.length > 30 ? `${blog.title.slice(0, 30)}...` : blog.title}</Link>
             
            </li>)
        }
      </div>
    </div>
  );
}
