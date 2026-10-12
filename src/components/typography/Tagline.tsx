import Image from "next/image";
interface TaglineProps {
  eyebrow: string;
  className?: string;
  textColor?: string;
  showIcon?: boolean;
}

const Tagline: React.FC<TaglineProps> = ({
  eyebrow,
  className,
  textColor,
  showIcon = true,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {showIcon && (
        <Image
          src="/tagline.png"
          alt="tagline"
          width={74}
          height={17}
          className="mx-auto"
        />
      )}
      <p
        className={`text-lg italic font-secondary ${textColor || "text-primary"} font-semibold ${className || ""}`}
      >
        {eyebrow}
      </p>
    </div>
  );
};

export default Tagline;
