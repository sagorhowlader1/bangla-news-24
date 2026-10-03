import Image from "next/image";

interface INews {
    tags:string;
    title: string
    text: string
    imageUrl: string
}

const NewsDetails = async({params}: {params: {newsId: string}}) => {
    const {newsId} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const news = data.data
    console.log(news)


    return (
        <div className="items-center mt-5">
            <h1>{news.title}</h1>
            
            <Image
            width={400}
            height={400}
            src={news.imageUrl}
            alt="image"
            />
        
            <p>{news.text}</p>

            <div className=" flex  mt-4 items-center gap-5">
                {
                    news.tags.map((tag:INews, index:number) => <p key={index}
                    className="text-red-600 mx-4 border border-red-500 ">{tag}</p>)
                }
            </div>
        </div>
    );
};

export default NewsDetails;