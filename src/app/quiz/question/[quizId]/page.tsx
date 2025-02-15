import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="absolute top-8 left-8 px-4 py-2 bg-white shadow-md rounded-lg text-xl font-semibold">
        1<span className="text-gray-500"> / 20</span>
      </div>

      <div className="w-96 h-96 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/path-to-your-image.jpg"
          alt="문제 이미지"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-8 w-96">
        <input
          type="text"
          placeholder="정답을 입력하세요"
          className="w-full px-6 py-4 text-center border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
    </div>
  );
}
