export type HomeSliderDetailComponentProps = {
  image_src: string;
  alt: string;
  link: string;
};

const HomeSliderDetailComponent = ({
  image_src,
  alt,
  link,
}: HomeSliderDetailComponentProps) => {
  return (
    <>
      <div className="h-56  sm:h-64 xl:h-80 2xl:h-[600px]">
        <a href={link}>
          <img src={image_src} className="w-full " alt={alt} />
        </a>
      </div>
    </>
  );
};

export default HomeSliderDetailComponent;
