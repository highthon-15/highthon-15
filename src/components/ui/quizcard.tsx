import { StarIcon } from "lucide-react";


export default function QuizCard() {
    return (
        <div className="flex flex-col w-full h-full shadow-xl rounded-2xl">
            {/* 퀴즈 이미지 */}
            <div className="flex flex-col w-full h-2/4 bg-blue-500 rounded-t-2xl"></div>
            <div className="flex flex-col w-full h-2/4 mt-5 justify-between">
                {/* 퀴즈 정보 */}
                <div className="flex flex-col w-full h-3/4 px-3 justify-center">
                    <h2 className="text-3xl font-bold mb-4">인기 퀴즈</h2>
                    <div className="flex flex-row w-full h-full justify-start">
                        <StarIcon className="w-8 h-8" />
                        <div className="flex flex-col mx-2">
                            <p className="text-2xl font-bold">4.5</p>
                            </div>
                    </div>
                    {/* 퀴즈 태그 */}
                    <div className="flex flex-row w-full h-1/6">
                        <div className="flex flex-row border-2 border-black items-center justify-center px-3 py-4 rounded-md">
                            <p className="text-sm font-bold">애니메이션</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
