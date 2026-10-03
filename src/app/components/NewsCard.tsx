import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image
              width={400}
              height={400}
              src={news.imageUrl}
              alt={news.imageAlt}
            />
          </figure>
          <div className="card-body">
            <p className="text-red-700 font-semibold">{news.category}</p>
            <h2 className="card-title">{news.title}</h2>
            <p>{news.description}</p>
            {/* <p className="text-slate-400">{date}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
