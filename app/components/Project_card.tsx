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
      <h2 className="heading1B  mb-4">{title}</h2>
      <div className="flex flex-col md:flex-row gap-6  bg-[#6E8480] p-5 rounded-md w-full max-w-4xl">
        <img src={imgSrc} alt={title} className="md:w-100 h-75 object-cover rounded-sm"/>
        <div className="flex flex-col justify-between heading5">
          <div>
            <p className="heading5 mb-2">{date}</p>
            <p className="text-white">{info}</p>
          </div>
          <a href={link} target="_blank" className="mt-3 text-teal-200 hover:underline heading5">
            Link
          </a>
        </div>
      </div>
    </div>
  );
}
