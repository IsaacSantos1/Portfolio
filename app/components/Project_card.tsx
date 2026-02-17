type ProjectCardProps = {
  title: string;
  date: string;
  info: string;
  imgSrc: string;
  link: string;
};

export default function Project_card({
  title,
  date,
  info,
  imgSrc,
  link,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center text-white  bg-[#6E8480]">
      
      {/* Section Title */}
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      {/* Card */}
      <div className="flex flex-col md:flex-row gap-6  bg-[#6E8480] p-5 rounded-md w-full max-w-4xl">
        
        <img
          src={imgSrc}
          alt={title}
          className="w-full md:w-60 h-40 object-cover rounded-sm"
        />

        <div className="flex flex-col justify-between text-sm">
          <div>
            <p className="text-xs mb-2">{date}</p>
            <p className="leading-relaxed text-white/90">{info}</p>
          </div>

          <a
            href={link}
            target="_blank"
            className="mt-3 text-teal-200 hover:underline text-sm"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}
