import { Link } from "react-router-dom";
import classes from "./VideoResultBox.module.css";
import DateObject from "react-date-object";

const VideoResultBox = (props) => {
  const videoData = props.videoData;

  const videoPublishedDate = new DateObject(videoData.snippet.publishedAt);
  console.log(videoData);
  return (
    <>
      <div className={classes.item}>
        <div className={classes.thumbnail}>
          <Link to={`/watch?v=${videoData.id.videoId}`}>
            <img src={videoData.snippet.thumbnails.high.url} />
          </Link>
        </div>
        <div className={classes.video_detail}>
          <div>
            <p>{videoPublishedDate.format("DD MMMM, YYYY")}</p>
            <h4>{videoData.snippet.title}</h4>
            <p>{videoData.snippet.description}</p>
          </div>
          <div>
            <Link>{videoData.snippet.channelTitle}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoResultBox;
