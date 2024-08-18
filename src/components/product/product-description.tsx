"use client"
import Price from '@/components/grid/price';
import Prose from '@/components/prose';

import { useCartStore } from "../../stores/useCartStore"
export function ProductDescription({ product }: { product: any }) {
  const addToCart = useCartStore(state => state.addToCart)
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.amount}
            currencyCode={product.priceRange.currencyCode}
          />
        </div>
      </div>
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      {/** Add to cart */}
      <button
						type='button'
						className='ml-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600'
						onClick={() => addToCart(product)}
					>
						Add to Cart
					</button>
    </>
  );
}
