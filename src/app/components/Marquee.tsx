import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
    id: string,
    title: string
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines:Headlines[] = data.data;
  
  return (
    <div className="bg-red-600 text-white sticky top-0 z-50">
      <div className="flex mx-auto max-w-7xl">
        <div className="bg-red-700 py-1 px-5 font-bold">সর্বশেষ</div>
        <MarqueeText className="py-1" direction="right" duration={10}>
          {headlines.map((h) => (
            <span key={h.id}>
              <span className="hover:underline cursor-pointer">{h.title}</span>
              <span className="mx-3 ">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
