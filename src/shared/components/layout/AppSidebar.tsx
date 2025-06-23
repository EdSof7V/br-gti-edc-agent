"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";

const allNavItems = [
    {
        icon:
            (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            ),
        name: "Inicio",
        path: "/home",
        section: "MENU"
    },
    {
        icon:
            (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
            ),
        name: "Data Domain",
        path: "/data-domain",
        section: "MENU"
    },
    {
        icon:
            (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
            ),
        name: "Metadata",
        path: "/metadata",
        section: "MENU"
    },
    {
        icon:
            (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12l3-3m0 0l3-3m-3 3h7.5M3.75 12l3 3m0 0l3 3m-3-3h7.5m-7.5-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        name: "Arquitectura de Datos Foro",
        path: "/data-architecture",
        section: "MENU"
    },
];

const AppSidebar = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered, openSubmenu, toggleSubmenu } = useSidebar();
    const pathname = usePathname();

    // Check if the current path is active
    const isActive = useCallback((path) => path === pathname, [pathname]);

    // Filter items by section
    const menuItems = allNavItems.filter(item => item.section === "MENU");

    // Determine if the sidebar should show text labels
    const shouldShowText = isExpanded || isHovered || isMobileOpen;

    return (
        <aside
            className={`fixed mt-16 flex flex-col lg:mt-0 top-0 left-0 bg-gray-900 text-white h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-800
        ${isExpanded || isMobileOpen
                    ? "w-[290px]"
                    : isHovered
                        ? "w-[290px]"
                        : "w-[90px]"
                }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Logo section */}
            <div
                className={`py-8 px-5 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
                    }`}
            >
                <Link href="/">
                    {shouldShowText ? (
                        <>
                            <Image
                                className="dark:hidden"
                                src="/images/logo/br-logo.jpg"
                                alt="Logo"
                                width={200}
                                height={50}
                            />
                            <Image
                                className="hidden dark:block"
                                src="/images/logo/br-logo.jpg"
                                alt="Logo"
                                width={200}
                                height={50}
                            />
                        </>
                    ) : (
                        <Image
                            src="/images/icons/ripley-icon.png"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                    )}
                </Link>
            </div>

            {/* Navigation content */}
            <div className="flex-1 flex flex-col">
                <nav className="mb-6 px-4">
                    <div className="flex flex-col gap-6">
                        {/* MENU Section */}
                        <div>
                            <h2
                                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-500 font-semibold ${!isExpanded && !isHovered
                                    ? "lg:justify-center"
                                    : "justify-start"
                                    }`}
                            >
                                {shouldShowText ? (
                                    "MENU"
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                )}
                            </h2>
                            <ul className="flex flex-col gap-1">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.path}
                                            className={`relative flex items-center px-4 py-3 rounded-md transition-colors ${isActive(item.path)
                                                ? "bg-gray-800 text-white border-r-4 border-[#8C4799]"
                                                : "text-gray-300 hover:bg-gray-800"
                                                } ${!shouldShowText ? "justify-center" : ""}`}
                                        >
                                            <span className={`${isActive(item.path) ? "text-white" : "text-gray-400"}`}>
                                                {item.icon}
                                            </span>
                                            {shouldShowText && (
                                                <span className="ml-3 text-sm">{item.name}</span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Bottom button - pushed to bottom */}
                <div className="mt-auto px-4 pb-4">
                    <Link
                        href="/gti"
                        className="flex justify-center items-center w-full py-3 px-4 bg-[#8C4799] hover:bg-[#7a3c84] text-white rounded-md transition-colors text-sm font-medium"
                    >
                        {shouldShowText ? "Regresar al GTI" :
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                            )
                        }
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default AppSidebar;