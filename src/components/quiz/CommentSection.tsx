import React from 'react';
import { Comment } from '@/types/quiz';

interface CommentSectionProps {
  comments: Comment[];
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
  const [currentCommentPage, setCurrentCommentPage] = React.useState(1);
  const commentsPerPage = 5;
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">댓글</h2>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="댓글을 입력하세요."
          className="flex-1 p-3 border rounded-lg text-black"
        />
        <button className="px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 text-xl">
          ↑
        </button>
      </div>
      <div className="space-y-6">
        {comments
          .slice((currentCommentPage - 1) * commentsPerPage, currentCommentPage * commentsPerPage)
          .map((comment, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{comment.user}</span>
                  <span className="text-gray-500 text-sm">• {comment.date}</span>
                </div>
                <p className="text-gray-700 mt-1">{comment.content}</p>
              </div>
            </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentCommentPage(page)}
            className={`w-8 h-8 rounded-full ${
              currentCommentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}; 