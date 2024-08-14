import type { Metadata } from "next";
import { notFound } from "next/navigation";
import data from "@/data/data.json";
import { GridTileImage } from "@/components/grid/tile";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/product/gallery";
import { ProductProvider } from "@/components/product/product-context";
import { ProductDescription } from "@/components/product/product-description";
import { Image } from "@/lib/types";
import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Banner";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = data.products.find(
    (product) => product.handle === params.handle
  );

  if (!product) return notFound();

  const { url, alt } = product.featuredImage || {};
  const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
  const indexable = false;

  return {
    title: product.title || product.title,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = data.products.find(
    (product) => product.handle === params.handle
  );

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: product.priceRange.currencyCode,
      highPrice: product.priceRange.amount,
      lowPrice: product.priceRange.amount,
    },
  };

  return (
    <ProductProvider>
        <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <Marquee />
      <Navbar />
      <div className="mx-auto max-w-screen-2xl px-4 flex flex-col gap-16 text-[#7AFFC7]">
        <div className="flex flex-col p-8 md:p-12 lg:flex-row lg:gap-8 ">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.slice(0, 5).map((image: any) => ({
                  src: image.url,
                  altText: image.alt,
                }))}
              />
            </Suspense>
          </div>

          <div className="basis-full lg:basis-2/6">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
      </div>
    </ProductProvider>
  );
}
