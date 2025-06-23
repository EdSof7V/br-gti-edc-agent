'use client'
import { HomepageApp } from "@/features/home/components/HomepageApp";
import { useSession } from "@/context/SessionContext";
import React from "react";



export default function HomePage() {
    const { session } = useSession();
  return (
    <>
     {/*  <div className="">
        <h2 className="text-4xl font-extrabold dark:text-white mt-10 mb-4">Bienvenido, {session?.username}</h2>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Este panel de control le permite gestionar y acceder a sus dashboards, tareas y recursos de datos de EDC</p>
      </div> */}

      <div className="col-span-12 space-y-6 xl:col-span-7 mt-10">
        <HomepageApp />
      </div>
    </>
  );
}
