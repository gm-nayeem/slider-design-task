import { FaPlay } from "react-icons/fa";

const MovieInfo = ({ text, moviesTitle, titleIndex }) => {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h2 className="text-md">COMING SOON</h2>
                <h1 className="text-xl">{moviesTitle[titleIndex]}</h1>
            </div>

            <hr className="mt-4" />

            <div className="flex items-center justify-between">
                <p className="text-sm">2019 - Movie - 2h 10min</p>
                <div className="flex gap-4 items-center">
                    <div className=" bg-yellow-400 text-black font-bold text-sm px-1 py-0.5 rounded-sm">
                        IMDb
                    </div>
                    <p className="text-sm">7.4</p>
                </div>
            </div>

            <hr className="mb-4" />

            <p className="text-sm">
                {`${text.substring(0, 220)}...`}
                <span className="text-amber-300 font-semibold cursor-pointer">Read More</span>
            </p>

            <div className="w-max flex items-center gap-2 bg-yellow-500 text-white text-sm px-4 py-1.5 mt-4 rounded-md cursor-pointer">
                <FaPlay />
                <p>Watch Now</p>
            </div>
        </div>
    )
}

export default MovieInfo;