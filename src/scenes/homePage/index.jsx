import { useSelector } from "react-redux";
import Post from "../feed/posts/Post";
import Feed from "../feed/posts/Feed";
import SideBar from "../feed/SideBar";

const HomePage = () => {
  const { _id, picturePath, } = useSelector((state) => state.user);
  return (
    <div>
      <div>
        <SideBar userId={_id} picturePath={picturePath} />
      </div>
      <div>
        <Feed picturePath={picturePath}/>
        <div>
          <Post userId={_id}/> 
        </div>
      </div>
    </div>
  );
};

export default HomePage;



