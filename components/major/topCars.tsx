export default function TopCars() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Chart placeholder - In a real app, you would use a charting library */}
      <div className="absolute inset-0 rounded-full border-spacing-4 border-[#0D3559] rotate-[200deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} />
      <div className="absolute inset-0 rounded-full border-spacing-4 border-[#175CD3] rotate-[160deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} />
      <div className="absolute inset-0 rounded-full border-spacing-4 border-[#2E90FA] rotate-[120deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} />
      <div className="absolute inset-0 rounded-full border-spacing-4 border-[#84CAFF] rotate-[80deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} />
      <div className="absolute inset-0 rounded-full border-spacing-4 border-[#D1E9FF] rotate-[40deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} />
      <div className="text-center">
        <div className="text-3xl font-bold">72,030</div>
        <div className="text-sm text-muted-foreground">Rental Car</div>
      </div>
    </div>
  )
}

