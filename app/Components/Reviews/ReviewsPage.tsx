import Image from "next/image";
import { reviewImages } from "./reviewsData";

export default function ReviewsPage() {
  const repeatedReviews = [...reviewImages, ...reviewImages];

  return (
    <section className="overflow-hidden bg-[#1f2b14] px-6 py-16 text-[#f2dc78] md:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-review-carousel gap-8">
            {repeatedReviews.map((review, index) => (
              <div
                key={`${review.src}-${index}`}
                className="relative h-[220px] w-[360px] shrink-0 overflow-hidden bg-white md:h-[300px] md:w-[490px]"
              >
                <Image
                  src={review.src}
                  alt={review.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <h2
          className="mx-auto mt-8 max-w-[420px] text-center text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.05] tracking-[-0.06em]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Extra Section which is animated running through
        </h2>
      </div>
    </section>
  );
}