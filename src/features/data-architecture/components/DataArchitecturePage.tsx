"use client";

import { useState } from "react";
import PageBreadCrumb from "@/shared/components/common/PageBreadCrumb";
import DataArchitectureAIAgentChat from "./DataArchitectureAIAgentChat";
import Link from "next/link";

interface Project {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'pending';
    progress: number;
    lastUpdated: string;
    owner: string;
}

const DataArchitecturePage = () => {
    const [activeTab, setActiveTab] = useState("projects");

    // Mock data for projects
    const projects: Project[] = [
        {
            id: "1",
            name: "NAME ARCH SOLUT - PROJECT",
            description: "Proyecto de arquitectura de datos para solución empresarial",
            status: 'active',
            progress: 75,
            lastUpdated: "2024-01-15",
            owner: "Jose Alegre"
        },
        {
            id: "2",
            name: "RETAIL ANALYTICS - PROJECT",
            description: "Arquitectura de datos para análisis de retail",
            status: 'completed',
            progress: 100,
            lastUpdated: "2024-01-10",
            owner: "Maria Rodriguez"
        },
        {
            id: "3",
            name: "CUSTOMER 360 - PROJECT",
            description: "Vista unificada del cliente con arquitectura de datos",
            status: 'pending',
            progress: 25,
            lastUpdated: "2024-01-20",
            owner: "Carlos Lopez"
        },
        {
            id: "4",
            name: "INVENTORY OPTIMIZATION - PROJECT",
            description: "Optimización de inventario con data architecture",
            status: 'active',
            progress: 60,
            lastUpdated: "2024-01-18",
            owner: "Ana Martinez"
        }
    ];

    const tabs = [
        {
            id: "projects",
            name: "Proyectos",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
            )
        },
        {
            id: "ai-agent",
            name: "Agente IA",
            icon: (
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                    <div className="absolute -top-1 -right-1">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-yellow-300 rounded-full absolute top-0.5 right-0.5 animate-ping"></div>
                    </div>
                </div>
            )
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'completed':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'pending':
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'active':
                return 'Activo';
            case 'completed':
                return 'Completado';
            case 'pending':
                return 'Pendiente';
            default:
                return 'Desconocido';
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "projects":
                return (
                    <div className="space-y-6">
                        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Proyectos de Arquitectura de Datos
                                </h3>
                                <button className="px-4 py-2 bg-[#8C4799] text-white rounded-lg hover:bg-[#7a3c84] transition-colors">
                                    Nuevo Proyecto
                                </button>
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{projects.length}</div>
                                    <div className="text-sm text-blue-600 dark:text-blue-400">Total Proyectos</div>
                                </div>
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                        {projects.filter(p => p.status === 'active').length}
                                    </div>
                                    <div className="text-sm text-green-600 dark:text-green-400">Activos</div>
                                </div>
                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                        {projects.filter(p => p.status === 'completed').length}
                                    </div>
                                    <div className="text-sm text-purple-600 dark:text-purple-400">Completados</div>
                                </div>
                                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                                        {projects.filter(p => p.status === 'pending').length}
                                    </div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">Pendientes</div>
                                </div>
                            </div>

                            {/* Projects List */}
                            <div className="space-y-4">
                                {projects.map((project) => (
                                    <Link 
                                        key={project.id} 
                                        href={`/data-architecture/project/${project.id}`}
                                        className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h4 className="font-medium text-gray-800 dark:text-white">{project.name}</h4>
                                                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                                                        {getStatusText(project.status)}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                                                    <span>Propietario: {project.owner}</span>
                                                    <span>Actualizado: {project.lastUpdated}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="text-right">
                                                    <div className="text-sm font-medium text-gray-800 dark:text-white">{project.progress}%</div>
                                                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                                        <div 
                                                            className="bg-[#8C4799] h-2 rounded-full" 
                                                            style={{ width: `${project.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case "ai-agent":
                return <DataArchitectureAIAgentChat />;
            default:
                return null;
        }
    };

    return (
        <div>
            <PageBreadCrumb pageTitle="Arquitectura de Datos Foro" />
            
            <div className="mb-6">

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Gestión de proyectos de arquitectura de datos empresarial
                </p>
            </div>

            {/* Tabs */}
            <div className="mb-6">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === tab.id
                                        ? "border-[#8C4799] text-[#8C4799]"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                                }`}
                            >
                                {tab.icon}
                                <span>{tab.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default DataArchitecturePage; 