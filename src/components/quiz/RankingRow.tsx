import { RankingItem } from '@/types/quiz';

interface RankingRowProps {
  item: RankingItem;
  isHighlighted?: boolean;
}

export const RankingRow = ({ item, isHighlighted = false }: RankingRowProps) => (
  <div 
    className={`flex items-center h-10 px-4 ${
      isHighlighted ? 'bg-blue-50' : ''
    }`}
  >
    <span className="w-12 text-center">{item.rank}</span>
    <div className="w-6 h-6 bg-gray-200 rounded-full mr-2" />
    <span className="flex-1">{item.name}</span>
    <span className="w-20 text-center text-gray-600">속도</span>
    <span className="w-20 text-center text-gray-600">{item.time}</span>
    <span className="w-16 text-center text-gray-600">개수</span>
    <span className="w-16 text-center text-gray-600">{item.score}</span>
  </div>
); 