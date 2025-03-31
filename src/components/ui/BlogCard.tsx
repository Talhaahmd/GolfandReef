interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  author: {
    name: string;
    date: string;
    readTime: string;
  };
}

export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  description,
  author,
}) => {
  return (
    <div className="flex flex-col items-start flex-1 min-w-[300px] border bg-[#FAF9F5] border-[rgba(0,0,0,0.15)]">
      <img src={image} alt={title} className="w-full h-[300px] object-cover" />
      <div className="flex flex-col items-start gap-6 w-full p-6">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="text-black text-sm font-semibold leading-[21px] rounded-md">
            {category}
          </div>
          <h3 className="text-black text-2xl font-normal leading-[33.6px] tracking-[-0.24px]">
            {title}
          </h3>
          <p className="text-black text-base font-normal leading-6">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div className="flex flex-col items-start flex-1">
            <div className="text-black text-sm font-semibold leading-[21px]">
              {author.name}
            </div>
            <div className="flex items-center gap-2 w-full">
              <time className="text-black text-sm font-normal leading-[21px]">
                {author.date}
              </time>
              <span className="text-black text-lg font-normal leading-[27px]">
                •
              </span>
              <span className="text-black text-sm font-normal leading-[21px]">
                {author.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
