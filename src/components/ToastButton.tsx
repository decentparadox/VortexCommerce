import { useToast } from "@/components/ui/use-toast"
import { Button } from "./ui/button"
const ToastDemo = () => {
    const { toast } = useToast()
  
    return (
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            variant: "destructive",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Checkout
      </Button>
    )
  }
  
  export default ToastDemo