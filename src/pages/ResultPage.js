import { useLoaderData, useSearchParams } from "react-router-dom";
import VideoResultBox from "../component/VideoResultBox";
import classes from "./ResultPage.module.css";

const ResultPage = () => {
  const videoData = useLoaderData();
  const [searchParmas, setSearchParams] = useSearchParams();
  const searchQuery = searchParmas.get("search_query");
  return (
    <div className={classes.results}>
      {videoData.map((video) => {
        return (
          <VideoResultBox
            key={video.id.videoId}
            videoData={video}
          ></VideoResultBox>
        );
      })}
    </div>
  );
};

export default ResultPage;

export async function loader({ request, params }) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("search_query");
  console.log("--------");
  console.log(query);
  const response = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3f2fef253cmsh71d65c8adc90f03p14c88fjsnbd04e335f3e9",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    }
  );
  if (!response.ok) {
    console.error("couldn't fetch data");
  }
  const resData = await response.json();
  return resData.items;
}
