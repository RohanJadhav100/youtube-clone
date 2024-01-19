import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/navigation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Rootlayout";
import ResultPage, { loader as ResultPageLoader } from "./pages/ResultPage";
import WatchVideoPage from "./pages/watchVideoPage";

const youtubeRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "result",
        element: <ResultPage></ResultPage>,
        loader: ResultPageLoader,
      },
      {
        path: "watch",
        element: <WatchVideoPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={youtubeRouter}></RouterProvider>;
}

export default App;
