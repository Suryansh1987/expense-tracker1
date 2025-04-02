"use client";
import React from "react";
import Image from "next/image";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
    const menuList = [
        { id: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
        { id: 2, name: "Budgets", icon: PiggyBank, path: "/dashboard/budget" },
        { id: 3, name: "Expenses", icon: ReceiptText, path: "/dashboard/expenses" },
        { id: 4, name: "Upgrade", icon: ShieldCheck, path: "/dashboard/upgrade" }
    ];

    let path = usePathname();
    path = path.replace(/\/$/, ""); // ✅ Remove trailing slash

    // ✅ Find the active menu item
    const activeMenu = menuList.find((menu) => menu.path === path);

    return (
        <div className="h-screen p-5 border shadow-sm">
            <Image src={"/logo.svg"} alt="logo" width={160} height={100} />

            {/* ✅ Display Active Page Name */}
            <h1 className="text-xl font-bold mt-5">
                {activeMenu ? activeMenu.name : "Not Found"}
            </h1>

            <div className="mt-5">
                {menuList.map((menu) => (
                    <Link key={menu.id} href={menu.path} className="block">
                        <h2
                            className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 transition 
                            ${path === menu.path ? "text-primary bg-blue-100" : ""}`}
                        >
                            <menu.icon size={20} />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>

            <div className="fixed bottom-10 p-5 flex gap-2">
                <UserButton /> Profile
            </div>
        </div>
    );
}

export default SideNav;
