import Link from "next/link";
import Image from "next/image";

interface DesignCardProps {
  id: string;
  slug?: string;
  title: string;
  image: string;
  price: string;
  category?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export function DesignCard({
  id,
  slug,
  title,
  image,
  price,
  category,
  isNew,
  isBestseller,
}: DesignCardProps) {
  return (
    <Link href={`/design/${slug || id}`} className="group cursor-pointer block">
      <div className="aspect-[3/4] bg-ink/5 mb-4 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        {(isNew || isBestseller) && (
          <div className="absolute top-3 left-3 flex gap-2">
            {isNew && (
              <span className="bg-ink text-paper text-xs font-medium px-2 py-1">NEW</span>
            )}
            {isBestseller && (
              <span className="bg-pop text-white text-xs font-medium px-2 py-1">POPULAR</span>
            )}
          </div>
        )}
        {/* Quick View on Hover */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-paper text-ink px-4 py-2 text-sm font-medium">Quick View</span>
        </div>
      </div>
      <h3 className="font-medium mb-1 line-clamp-1">{title}</h3>
      <div className="flex items-center justify-between">
        <p className="text-sm text-ink/50">${price}</p>
        {category && (
          <p className="text-xs text-ink/40 uppercase tracking-wider">{category}</p>
        )}
      </div>
    </Link>
  );
}
