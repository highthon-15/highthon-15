import PopularQuizCard from "@/components/ui/popularquizcard";

export default function MainPage() {
    return (
        <div className="flex flex-col mx-auto px-4 py-8 items-center">
            {/*인기 퀴즈 섹션*/}
            <div className="flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold mb-4">인기 퀴즈</h2>
                <div className="flex flex-col md:grid-cols-3 gap-2 items-center">
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
        <div className="h-full w-full bg-white flex flex-row">
            <span className="text-6xl font-bold">{ranknumber}</span>
            <PopularQuizCard />
        </div>
    )
}

