import { Link } from "react-router-dom";
import classes from "../pages/watchVideoPage.module.css";

const SuggestSingleVideo = ({ sugVidData }) => {
  return (
    <Link
      to={"/watch?v=" + sugVidData.id.videoId}
      className={classes.suggestSingleVideo}
    >
      <div className={classes.sideImage}>
        {sugVidData.snippet.thumbnails.high ? (
          <img src={sugVidData.snippet.thumbnails.high.url} />
        ) : (
          <img src={sugVidData.snippet.thumbnails.default.url} />
        )}
      </div>
      <div className={classes.videoInfo}>
        <p className={classes.title}>{sugVidData.snippet.title}</p>
        <p className={classes.channelName}>{sugVidData.snippet.channelTitle}</p>
        <p className={classes.videoViews}>31M Views</p>
      </div>
    </Link>
  );
};

export default SuggestSingleVideo;
