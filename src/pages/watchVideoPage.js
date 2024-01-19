import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import VideoContent from "../component/videoContent";

const WatchVideoPage = () => {
  console.log("VIDEO PAGE");
  const [videoDetail, setVideoDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParmas, setSearchParams] = useSearchParams();
  const id = searchParmas.get("v");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "3f2fef253cmsh71d65c8adc90f03p14c88fjsnbd04e335f3e9",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setVideoDetail(data.items[0]);
      });
  }, [searchParmas]);

  const loaderComponent = (
    <p style={{ textAlign: "center", marginTop: "10px" }}>Loading...</p>
  );
  return (
    <>
      {isLoading && loaderComponent}
      {!isLoading && videoDetail && <VideoContent videoData={videoDetail} />}
    </>
  );
};

export default WatchVideoPage;
