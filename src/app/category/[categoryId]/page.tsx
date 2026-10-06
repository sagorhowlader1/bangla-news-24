import NewsCard from "@/app/components/NewsCard";

interface News{
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
}



const CategoryNews = async({params}: {params:{categoryId: string}}) => {
    const {categoryId} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNews = data.data

  
    return (
        <div>
            <h1 className="font-bold text-2xl border-b-2 border-red-700  py-2 mt-3">{data.title}</h1>

            <div className="grid grid-cols-3 gap-2 mt-4">
                {categoryNews.map((news:News) => <NewsCard key={news.id} news={news} />)}
            </div>
        </div>
    );
};

export default CategoryNews;