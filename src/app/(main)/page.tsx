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
                    <PopularQuizCardWithRankNumber ranknumber={1} />
                    <PopularQuizCardWithRankNumber ranknumber={2} />
                    <PopularQuizCardWithRankNumber ranknumber={3} />
                </div>
            </div>
        </div>
    );
}

const PopularQuizCardWithRankNumber = ({ ranknumber }: { ranknumber: number }) => {
    return (
        <div className="h-60 w-3/5 bg-white flex flex-row items-center">
            <div className="flex flex-row items-center w-1/12 justify-center">
                <span className="text-6xl font-bold">{ranknumber}</span>
            </div>
            <PopularQuizCard />
        </div>
    )
}

