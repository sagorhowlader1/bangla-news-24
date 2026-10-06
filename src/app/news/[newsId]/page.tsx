import Image from "next/image";
import Link from "next/link";

interface INews {
  tags: string[];
  title: string;
  text: string;
  imageUrl: string;
}

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const news = data.data;
  console.log(data, "data error");

  if (!data.success) {
    return (
        <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">

        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <svg
              className="h-10 w-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 9v3.5m0 3h.01M10.3 3.8 2.7 18a2 2 0 0 0 1.8 3h15a2 2 0 0 0 1.8-3L13.7 3.8a2 2 0 0 0-3.4 0Z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
          সংবাদটি পাওয়া যায়নি
        </h1>

        <p className="mt-3 text-sm leading-6 text-neutral-500 sm:text-base">
          দুঃখিত, আপনি যে সংবাদটি খুঁজছেন সেটি বর্তমানে পাওয়া যাচ্ছে না।
        </p>

        <div className="mt-7">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            ← সব সংবাদে ফিরে যান
          </Link>
        </div>

      </div>
    </main>
    );
  }

  return (
    <div className="items-center mt-5">
      <h1>{news.title}</h1>

      <Image width={400} height={400} src={news.imageUrl} alt="image" />

      <p>{news.text}</p>

      <div className=" flex  mt-4 items-center gap-5">
        {news.tags.map((tag: string, index: number) => (
          <p key={index} className="text-red-600 mx-4 border border-red-500 ">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NewsDetails;
