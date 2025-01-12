import Image from "next/image";
import Marquee from "react-fast-marquee";

const Brands = ({ data }) => {
  return (
    <>

      <div className="h-[200px] container relative w-full max-w-[1220px] mb-10">
        <Marquee
          gradient={true}
          speed={100}
          loop={0}
          gradientColor={[`#161616`,`#161616`]}
          gradientWidth={100}
          pauseOnHover={true}
          >
            {data.results.map((item) => {
              return (
                <div
                  key={item.id}
                  className="logo-div flex flex-col items-center pl-20"
                >
                  <Image
                    loading="eager"
                    quality={100}
                    className="logo-div"
                    src={item.properties.logo.files[0].external.url}
                    alt="brand"
                    width={169}
                    height={169}
                    objectFit="contain"
                  />
                  {item.properties.name.title[0] && (
                    <p className="text-[#fff] font-semibold">
                      {item.properties.name.title[0].plain_text}
                    </p>
                  )}
                </div>
              );
            })}
        </Marquee>
      </div>
    </>
  );
};

export default Brands;
