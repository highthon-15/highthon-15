export default function MainPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">환영합니다</h1>
        <p className="text-xl text-gray-600">
          메인 페이지에 오신 것을 환영합니다.
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">섹션 1</h2>
          <p className="text-gray-600">
            첫 번째 섹션의 내용입니다.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">섹션 2</h2>
          <p className="text-gray-600">
            두 번째 섹션의 내용입니다.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">섹션 3</h2>
          <p className="text-gray-600">
            세 번째 섹션의 내용입니다.
          </p>
        </div>
      </section>
    </div>
  );
}