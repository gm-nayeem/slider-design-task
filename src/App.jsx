import { useState } from "react";

import Slider from "./components/Slider";
import MovieInfo from "./components/MovieInfo";
import {
  text,
  moviesTitle,
  images
} from './data';

const App = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  return (
    <div className="w-[100vw] h-screen flex justify-center items-center bg-black text-white">
      <div className="w-[100vw] px-[5vw] md:px-[3vw] flex flex-col md:flex-row gap-[4vw]">

        <div className="w-[90vw] md:w-[45vw]">
          <Slider
            images={images}
            visibleCount={3}
            interval={3000}
            totalMovieTitle={moviesTitle.length}
            setTitleIndex={setTitleIndex}
          />
        </div>

        <div className=" w-[90vw] md:w-[45vw]">
          <MovieInfo
            moviesTitle={moviesTitle}
            text={text}
            titleIndex={titleIndex}
          />
        </div>
      </div>
    </div>
  )
}

export default App