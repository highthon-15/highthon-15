import QuizCard from "@/components/ui/quizcard";
import PopularQuizCard from "@/components/ui/popularquizcard";

export default function MainPage() {
    return (
        <div className="flex w-full h-full flex-col mx-auto py-8 items-center">
            {/*인기 퀴즈 섹션*/}
            <div className="flex w-full h-full flex-col gap-8 pt-12 items-center">
                <div className="flex flex-row w-3/6 justify-between">
                    <h2 className="text-4xl font-extrabold">인기 퀴즈</h2>
                </div>
                <div className="flex flex-col w-full md:grid-cols-3 gap-4 items-center">
                    <PopularQuizCard ranknumber={1} />
                    <PopularQuizCard ranknumber={2} />
                    <PopularQuizCard ranknumber={3} />
                </div>
            </div>

            {/*추천 퀴즈 섹션*/}
            <div className="flex w-full h-[50rem] flex-col gap-8 mt-12 items-center">
                <div className="flex flex-row w-3/6 justify-between">
                    <h2 className="text-4xl font-extrabold">추천 퀴즈</h2>
                </div>
                <div className="flex w-full h-full gap-4 items-center justify-center">
                    <div className="grid grid-cols-3 w-3/6 h-full gap-4 items-center justify-center">
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                    </div>
                </div>
            </div>
        </div>
    );
}