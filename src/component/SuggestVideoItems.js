import { useEffect, useState } from "react";
import SuggestSingleVideo from "./SuggestSingleVideo";

const SuggestVideoItems = ({ videoData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [suggestVideoData, setSuggestVideoData] = useState(null);
  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoData.id}&part=id%2Csnippet&type=video&maxResults=50`,
      {
        method: "GET",
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
        console.log(data.items);
        setIsLoading(false);
        setSuggestVideoData(data.items);
      });
  }, []);

  const loaderComponent = <p>Loading....</p>;

  return (
    <>
      {isLoading && loaderComponent}
      {!isLoading &&
        suggestVideoData.map((sugVid) => {
          // return <SuggestSingleVideo sugVidData={sugVid}></SuggestSingleVideo>;
          return <SuggestSingleVideo sugVidData={sugVid}></SuggestSingleVideo>;
        })}
    </>
  );
};

export default SuggestVideoItems;
