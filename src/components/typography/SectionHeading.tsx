import Headings from "./Headings";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface SectionHeadingProps {
  title: string;
  level?: HeadingLevel;
  textCenter?: boolean;
  smTextCenter?: boolean;
  mdTextCenter?: boolean;
  titleColor?: string;
  fontClassName?: string;
  wrapperClassName?: string;
  titleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  level = 2,
  textCenter = false,
  smTextCenter = false,
  mdTextCenter = false,
  titleColor = "text-primary",
  fontClassName = "font-primary",
  wrapperClassName = "",
  titleClassName = "",
}) => {
  return (
    <div className={wrapperClassName}>
      <Headings
        level={level}
        heading={title}
        className={`text-3xl md:text-4xl lg:text-5xl/tight font-semibold ${fontClassName} ${titleColor}  ${
          textCenter ? "text-center" : ""
        } ${smTextCenter ? "max-md:text-center" : ""} ${
          mdTextCenter ? "md:text-center" : ""
        }  ${titleClassName}`}
      />
    </div>
  );
};

export default SectionHeading;
