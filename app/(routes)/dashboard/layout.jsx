"use client"; // Ensures the file runs as a client component

import React, { useEffect, useState } from 'react';
import SideNav from './_components/sideNav';
import DashboardHeader from './_components/DashboardHeader';
import { Budgets } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { db } from '@/utils/dbconfig';
import { useRouter } from 'next/navigation'; 

function DashboardLayout({ children }) {
    const { user } = useUser();
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    
    const checkUserBudgets = async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return; 
        const result = await db
            .select()
            .from(Budgets)
            .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress));
        console.log(result);
        if (result.length === 0 && isClient) {
            router.replace('/dashboard/budget'); 
        }
    };

    
    useEffect(() => {
        if (user && isClient) {
            checkUserBudgets(); 
        }
    }, [user, isClient]);

    if (!isClient) return null; 

    return (
        <div className="flex">
            <div className="fixed md:w-64 hidden md:block">
                <SideNav />
            </div>

            <div className="flex-1 md:ml-64">
                <DashboardHeader />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DashboardLayout;
