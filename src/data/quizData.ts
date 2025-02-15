import { RankingItem, Comment } from '@/types/quiz';

export const rankingData: RankingItem[] = [
  { rank: 1, name: '김영철', time: '00:07:21', score: '10/10' },
  { rank: 2, name: '김진수', time: '00:08:03', score: '10/10' },
  { rank: 3, name: '황하미', time: '00:08:57', score: '10/10' },
  { rank: 4, name: '이영명', time: '00:08:60', score: '10/10' },
];

export const myRank: RankingItem = { 
  rank: 3723, 
  name: '나영진', 
  time: '00:40:97', 
  score: '10/10' 
};

export const nearbyRanks: RankingItem[] = [
  { rank: 3720, name: '최영범', time: '00:40:38', score: '10/10' },
  { rank: 3721, name: '김미나', time: '00:40:92', score: '10/10' },
  { rank: 3722, name: '차우현', time: '00:40:95', score: '10/10' },
  myRank,
  { rank: 3724, name: '김준진', time: '00:41:22', score: '10/10' },
  { rank: 3725, name: '임민진', time: '00:42:92', score: '10/10' },
  { rank: 3726, name: '최영범', time: '00:42:99', score: '10/10' },
];

export const comments: Comment[] = [
  { user: '김영철', date: '2025/02/15', content: '내가 일등 ㅋ' },
  { user: '주현아', date: '2025/02/13', content: '케이크 맛있겠다..' },
  { user: '김진진', date: '2025/02/12', content: '시은 돈있겠다 ㅋ' },
  { user: '박지원', date: '2025/01/27', content: '5번 문제가 어려웠죠' },
  { user: '최영범', date: '2025/01/25', content: '우리집에 고구마 케이크 있을 부탁요? 고구마 케이크 진짜 맛있는데~~ 내가 다 먹을거임 하하하하하' },
]; 