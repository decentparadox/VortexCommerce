"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Cart from "@/minicart/Cart";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import ToastDemo from "@/components/ToastButton"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/stores/useCartStore"
import useFromStore from "@/hooks/useFromStore"
const CartButton = () => {
  const cart = useFromStore(useCartStore, state => state.cart)
  const { toast } = useToast()
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="bg-[#1F1F21] h-full text-[#E0FFF4] py-2 px-4">
            <ShoppingBag />
            <div className='absolute top-8 right-1 text-white rounded-full bg-blue-700 w-5 h-5 text-sm -ml-1'>{cart?.length}</div>
          </button>
        </SheetTrigger>
        <SheetContent >
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
          </SheetHeader>
          <Cart />
          <SheetFooter>

            <SheetClose asChild>
            <ToastDemo />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default CartButton;
