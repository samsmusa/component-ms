"use client";

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {UserDropDownMenu} from "@/components/core/navbar/UserDropDownMenu";
import {Icons} from "@/components/ui/icons";
import {docsConfig} from "@/core/docs";
import {fetchUser} from "@/service/common/user";
import {User} from "@/core/common/Interfaces";

export function DeskNavbar() {
    const [user, setUser] = useState<User | null | undefined>(undefined);
    const pathname = usePathname();
    const router = useRouter()
    const getLinkClassName = (href: string, exact = false) => {
        const isActive = exact ? pathname === href : pathname?.startsWith(href);
        return cn(
            "group relative text-lg hover:text-foreground/80 transition-colors", // Make hover and transition consistent
            isActive ? "text-primary" : "text-foreground/60"
        );
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const u = await fetchUser();
                setUser(u)
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData().then();
    }, []);


    return (
        <div className="">
            <div className="container mx-auto hidden md:flex justify-evenly items-center py-4 px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
                    <Icons.logo className="h-6 w-6"/>
                    <span className="hidden lg:inline-block font-bold">
          </span>
                </Link>
                <nav className="flex items-center gap-4 lg:gap-6 text-sm">
                    {
                        docsConfig.mainNav.map((item, i) => <Link key={i} href={item.href as string}
                                                                  className={getLinkClassName(item.href as string, true)}>
                            {item.title}
                            <span
                                className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                        </Link>)
                    }
                </nav>
                {
                    user === undefined && <Button className="bg-transparent text-transparent shadow-none" variant="secondary">Sign In</Button>
                }
                {
                    user === null && <Button onClick={() => router.push('/login/')} variant="secondary">Sign In</Button>
                }
                {
                    user && <UserDropDownMenu user={user}/>
                }
            </div>
        </div>
    );
}
