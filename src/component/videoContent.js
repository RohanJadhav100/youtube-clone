import classes from "../pages/watchVideoPage.module.css";
import SuggestVideoItems from "./SuggestVideoItems";
import VideoDetail from "./videoDetail";
const VideoContent = ({ videoData }) => {
  return (
    <>
      <div className={classes.mainContent}>
        <div className={classes.firstBox}>
          <div className={classes.mainImage}>
            <img src={videoData.snippet.thumbnails.maxres.url} />
          </div>
          <VideoDetail data={videoData} />
        </div>
        <div className={classes.sideBox}>
          <SuggestVideoItems videoData={videoData} />
        </div>
      </div>
    </>
  );
};

export default VideoContent;
