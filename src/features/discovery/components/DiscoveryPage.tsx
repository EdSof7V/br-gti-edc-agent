"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "@/context/SessionContext";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  sub?: string;
  [key: string]: any;
}

export const DiscoveryPage = () => {
  return (
    <>
      <div className="">
        <h2 className="text-4xl font-extrabold dark:text-white mt-10 mb-4">Bienvenido a la página de descubrimiento</h2>    
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Esta página está en construcción y pronto estará disponible.</p>
      </div>
    </>
  );
};