

import { Product } from "@/lib/types"
import Image from "next/image"
import { useCartStore } from "@/stores/useCartStore"
import { Trash } from 'lucide-react';
interface Props {
	product: Product
}
//@ts-ignore
export default function CartItem({ product }: Props) {
	const removeFromCart = useCartStore(state => state.removeFromCart)

	return (
		<li className='flex justify-between items-center gap-4  mb-2 shadow-md p-4'>
			<div className='flex items-center'>
				<Image
					src={product.featuredImage.url}
					alt={product.title}
					width={100}
					height={100}
					className='h-10 w-10 mr-4'
				/> 
				<div className='flex flex-col'>
					<span className='font-bold flex-1'>{product.title}</span>
					<span className='text-gray-600 font-bold'>₹{product.priceRange.amount}</span>
					<span>Quantity: {product.quantity}</span>
				</div>
			</div>
			<div>
				<button
					title='Remove Item'
					className='text-red-500 hover:text-red-600 ml-4'
					onClick={() => removeFromCart(product)}
				>
					<Trash />
				</button>
			</div>
		</li>
	)
}
