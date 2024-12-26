import React from 'react';

interface AdminSideProps {
  icon: React.ReactNode; // Accept any valid React node for the icon
  LinkName: string;
}

export default function AdminSide({ icon, LinkName }: AdminSideProps) {
  return (
    <div className="w-full py-2 px-2 flex gap-2 items-center hover:bg-[#3563E9] group cursor-pointer rounded-md">
      {icon}
      <p className="text-sm text-[#6c7c93] group-hover:text-white">
        {LinkName}
      </p>
    </div>
  );
}
