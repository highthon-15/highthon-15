import { StarIcon } from "lucide-react";

interface Props {
  title: string;
  explanation: string;
  rating: number;
  tag: string;
  thumbnail: string;
}

export function QuizCard({ title, explanation, rating, tag, thumbnail }: Props) {
    return (
        <div className="flex flex-col w-full h-full shadow-xl rounded-2xl">
          {/* 퀴즈 이미지 */}
          <div
            className="flex flex-col w-full h-2/5 bg-cover rounded-t-2xl"
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
          
          <div className="flex flex-col w-full h-3/5 mt-14 justify-between">
            {/* 퀴즈 정보 */}
            <div className="flex flex-col w-full px-3 justify-center">
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              
              <div className="flex flex-row items-center">
                <StarIcon className="w-6 h-6 text-yellow-500" />
                <p className="text-lg font-bold mx-1">{rating}</p>
              </div>
              
              {/* 퀴즈 설명 */}
              <p className="text-xs text-gray-500 line-clamp-2">{explanation}</p>
            </div>
    
            {/* 퀴즈 태그 */}
            <div className="flex flex-row w-full h-1/6 mt-4 mb-3 ml-2">
              <div className="flex flex-row border border-black items-center justify-center px-2 py-2 rounded-md">
                <p className="text-xs font-bold">{tag}</p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default QuizCard;
