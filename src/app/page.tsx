export default function Home() {
  return (
    <main className="bg-[#37474F] min-h-screen flex justify-center">
      <section className="bg-[#f1f3f5] max-w-screen-lg w-full mx-[220px] p-8 flex flex-col items-center">
        <p className="text-4xl font-extrabold mb-4 text-center">LOL-CARD</p>
        <input
          className="border p-2 rounded-lg w-1/2 mb-4"
          placeholder="소환사명을 입력해주세요"
        />

        <article className="text-center w-full">
          <p className="text-xl font-semibold mb-2">최근 작성한 롤카드 목록</p>
          <div className="bg-white p-4 rounded-lg shadow w-1/2 overflow-x-auto whitespace-nowrap m-auto">
            <ul className="list-none flex">
              <li className="mb-1 mr-4">1</li>
              <li className="mb-1 mr-4">2</li>
              <li className="mb-1 mr-4">3</li>
              <li className="mb-1 mr-4">4</li>
              <li className="mb-1">5</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
