"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

const AdminLogoSection: React.FC = () => {
  return (
    <div className="shrink-0">
      <Link href="/admin" className="flex items-center gap-2">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={900}
          height={900}
          className="h-10 w-auto"
        />
      </Link>
    </div>
  );
};

export default AdminLogoSection;
