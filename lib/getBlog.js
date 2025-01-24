export default async function getBlog(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return result.json();
    
}