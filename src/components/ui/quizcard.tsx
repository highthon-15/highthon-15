import { StarIcon } from "lucide-react";

interface QuizCardProps {
  title: string;
  explanation: string;
  rating: number;
  tag: string;
  thumbnail: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ title, explanation, rating, tag, thumbnail }) => {
  return (
    <div className="flex flex-col w-full h-full shadow-xl rounded-2xl">
      {/* 퀴즈 이미지 */}
      <div
        className="flex flex-col w-full h-2/4 bg-cover rounded-t-2xl"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      
      <div className="flex flex-col w-full h-2/4 mt-5 justify-between">
        {/* 퀴즈 정보 */}
        <div className="flex flex-col w-full h-3/4 px-3 justify-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          
          <div className="flex flex-row w-full h-full justify-start items-center">
            <StarIcon className="w-8 h-8 text-yellow-500" />
            <div className="flex flex-col mx-2">
              <p className="text-2xl font-bold">{rating}</p>
            </div>
          </div>
          
          {/* 퀴즈 설명 */}
          <p className="text-sm text-gray-500">{explanation}</p>
        </div>

        {/* 퀴즈 태그 */}
        <div className="flex flex-row w-full h-1/6 mt-4">
          <div className="flex flex-row border-2 border-black items-center justify-center px-3 py-4 rounded-md">
            <p className="text-sm font-bold">{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
