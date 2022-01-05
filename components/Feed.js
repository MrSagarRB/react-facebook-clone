import { Input } from "postcss"
import InputBox from "./InputBox"
import Stories from "./Stories"
import Posts from "./Post"

function Feed() {
    return (
        <div>
            {/* Stories */}
     <Stories />


              {/* Input Box */}
        <InputBox /> 
 



                {/* Post */}


          <Posts />


        </div>
    )
}

export default Feed
