import {useQuery} from "@tanstack/react-query";

const fetchPosts = async()=>{
    const res = await fetch ("")

    if(!res.ok){
        throw new Error("Network error");
    }

    return res.json();
};

function PostList(){
    const {data,isPending,isError,error,refetch} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })

    if(isPending){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>Error: (error.message)</h2>
    }

    return (
        <div>
            <h1>Posts</h1>

            <button onClick={()=> refetch()}>Refetch</button>

            {data.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default PostList;