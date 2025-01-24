import getBlog from '@/lib/getBlog';
import React from 'react';

const BlogPage = async ({params}) => {
    const {id} = params;
    const blog = await getBlog(id)
    return (
        <div className='w-[80%] mx-auto border-l-2 pl-6 mt-10'>
           
           <h4 className='text-3xl my-4'> {blog.title}</h4>
           <p>{blog?.body}</p>
           
        </div>
    );
};

export default BlogPage;