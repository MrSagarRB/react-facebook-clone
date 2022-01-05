import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";


function Posts() {
  const [realtimePosts] = useCollection(db.collection("posts"));

  return <div>
{realtimePosts?.docs.map((post)=>(
    <Post 
       key={post.id}
        name={post.data().name}
        message={post.data().message}
        email={post.data().email}
        image={post.data().image}
        postImage={post.data().postImage}

        


       />
))}







  </div>;
}

export default Posts;