import { type Lang } from "@/lib/translations";

interface ResultCardProps {
  index: number;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  rgbImage: string;
  ndviImage: string;
  lang: Lang;
}

const ResultCard = ({ index, title, desc, rgbImage, ndviImage, lang }: ResultCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold mx-auto lg:mx-0">
        {index}
      </div>
      <h3 className="font-display text-lg font-bold text-primary">
        {title[lang]}
      </h3>
      <p className="mt-2 text-foreground/70">{desc[lang]}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <img src={rgbImage} alt="RGB" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <p className="mt-1 text-center text-xs text-foreground/50">RGB</p>
        </div>
        <div>
          <img src={ndviImage} alt="NDVI" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <p className="mt-1 text-center text-xs text-foreground/50">NDVI</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
