import SideBar from "./SideBar";
import NewPost from "./NewPost";

function FeedScenes() {
  return (
    <>
      <div className="feed-top"></div>
      <SideBar />
      <div className="feed">
        <NewPost />
      </div>
    </>
  );
}

export default FeedScenes;
