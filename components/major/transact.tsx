import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      car: "Nissan GT - R",
      type: "Sport Car",
      date: "20 July",
      price: "$80.00",
      image: "/assets/Car5.png"
    },
    {
      id: 2,
      car: "Koenigsegg",
      type: "Sport Car",
      date: "19 July",
      price: "$99.00",
      image: "/assets/Car6.png"
    },
    {
      id: 3,
      car: "Rolls - Royce",
      type: "Sport Car",
      date: "18 July",
      price: "$96.00",
      image: "/assets/Car7.png"
    },
    {
      id: 4,
      car: "CR - V",
      type: "SUV",
      date: "17 July",
      price: "$80.00",
      image: "/assets/Car3.png"
    }
  ]

  return (
    <Card className="p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Transaction</h2>
        <Button className="text-primary">View All</Button>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg overflow-hidden flex justify-center items-center">
              <Image 
                src={transaction.image} 
                alt={transaction.car}
                height={1000}
                width={1000}
                className="h-4 w-16 object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{transaction.car}</h3>
              <p className="text-sm text-muted-foreground">{transaction.type}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{transaction.price}</p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

