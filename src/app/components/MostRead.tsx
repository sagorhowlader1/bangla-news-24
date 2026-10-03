interface MostReadNews {
    id: string;
    title: string
}
const MostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const news: MostReadNews[] = data.data
    console.log(news, 'Most Read API Data!!!!')
    return (
        <div className='card p-2 bg-base-100 border border-gray-300 mx-4'>
           <h1 className='font-bold text-black mb-3'>সর্বাধিক পঠিত</h1>

           <div className='grid gap-2 px-3 py-4'>
            {
                news.map((n, i) => <div key={n.id} className='flex gap-1 items-center'>
                       <p className='text-red-600 text-xl font-bold'>{i+1}</p> <h2 className='px-1 bg-base-100'>{n.title}</h2>
                </div>)
            }
           </div>
        </div>
    );
};

export default MostRead;