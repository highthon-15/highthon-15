import { StarIcon } from "lucide-react";

const PopularQuizCardWithRankNumber = ({ ranknumber }: { ranknumber: number }) => {
    return (
        <div className="h-60 w-full bg-white flex flex-row items-center">
            <div className="flex flex-row items-center w-1/12 justify-center">
                <span className="text-6xl font-bold">{ranknumber}</span>
            </div>
            <PopularQuizCardWidget />
        </div>
    )
}

const PopularQuizCardWidget = () => {
    return (
        <div className="flex w-full h-full shadow-xl rounded-3xl">
            {/* 대표 사진 */}
            <div className="flex flex-col w-1/4 h-full bg-red-500 rounded-l-3xl">
            </div>
            {/* 퀴즈 정보 */}
            <div className="flex flex-col w-3/4 h-full">
                {/* 퀴즈 제목 */}
                <div className="flex flex-col w-full h-1/4 pt-4 px-3 justify-center">
                    <h2 className="text-3xl font-bold mb-4">인기 퀴즈 (나중에 데이터 클래스 만들어서 사용 예정)</h2>
                </div>
                {/* 퀴즈 별점 */}
                <div className="flex flex-row w-full h-3/4 space-x-2 px-3 py-2">
                    <StarIcon className="w-10 h-10" />
                    <h3 className="text-2xl font-bold">4.5</h3>
                </div>
                {/* 퀴즈 태그 */}
                <div className="flex flex-row w-full h-3/6 items-center">
                    <div className="flex h-1/2 flex-row border-2 border-black items-center justify-center px-3 mx-3 my-2 rounded-md">
                        <p className="text-sm font-bold">애니메이션</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


// todo 데이터 타입 만들어서 참조필요
export default function PopularQuizCard({ ranknumber }: { ranknumber: number }) {
    return (
        <PopularQuizCardWithRankNumber ranknumber={ranknumber} />
    )
}