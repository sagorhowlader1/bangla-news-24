import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageAlt: string;
  imageUrl: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const [firsNews, ...otherNews] = news;
  console.log(firsNews);

  return (
    <div className="flex gap-2 mb-10">
      <Link href={`/news/${firsNews.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image
              width={600}
              height={600}
              src={firsNews.imageUrl}
              alt={firsNews.imageAlt}
            />
          </figure>
          <div className="card-body">
            <p className="text-red-700 font-semibold">{firsNews.category}</p>
            <h2 className="card-title">{firsNews.title}</h2>
            <p>{firsNews.description}</p>
            <p className="text-slate-400">{date}</p>
          </div>
        </div>
      </Link>

      <div className="grid gap-2 px-3">
        
          {otherNews.slice(0, 4).map((other) => (
            <div
              key={other.id}
              className="card bg-base-100 
            border border-gray-300 px-4 py-2"
            >
              <p className="text-red-700 font-semibold">{firsNews.category}</p>
              <div className="font-bold text-black">{other.title}</div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default MainNews;
