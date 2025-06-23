"use client";

import { useState } from "react";
import PageBreadCrumb from "@/shared/components/common/PageBreadCrumb";
import Link from "next/link";

interface ProjectStage {
    id: string;
    name: string;
    description: string;
    status: 'completed' | 'in-progress' | 'pending';
    progress: number;
    lastUpdated: string;
    documents: number;
    tasks: number;
}

const ProjectDetailsPage = ({ projectId }: { projectId: string }) => {
    const [activeTab, setActiveTab] = useState("as-is");

    // Mock project data
    const project = {
        id: projectId,
        name: "NAME ARCH SOLUT - PROJECT",
        description: "Proyecto de arquitectura de datos para solución empresarial",
        status: 'active',
        progress: 75,
        owner: "Jose Alegre",
        startDate: "2024-01-01",
        endDate: "2024-06-30"
    };

    // Mock stages data
    const stages: ProjectStage[] = [
        {
            id: "as-is",
            name: "AS IS",
            description: "Análisis del estado actual de la arquitectura de datos",
            status: 'completed',
            progress: 100,
            lastUpdated: "2024-01-10",
            documents: 12,
            tasks: 8
        },
        {
            id: "analisis",
            name: "Análisis",
            description: "Evaluación y análisis de requerimientos y gaps",
            status: 'in-progress',
            progress: 75,
            lastUpdated: "2024-01-15",
            documents: 8,
            tasks: 6
        },
        {
            id: "to-be",
            name: "TO BE",
            description: "Diseño de la arquitectura objetivo",
            status: 'in-progress',
            progress: 45,
            lastUpdated: "2024-01-18",
            documents: 5,
            tasks: 10
        },
        {
            id: "checklist",
            name: "Checklist",
            description: "Verificación y validación de la implementación",
            status: 'pending',
            progress: 0,
            lastUpdated: "2024-01-20",
            documents: 0,
            tasks: 15
        }
    ];

    const tabs = [
        {
            id: "as-is",
            name: "AS IS",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H21" />
                </svg>
            )
        },
        {
            id: "analisis",
            name: "Análisis",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
            )
        },
        {
            id: "to-be",
            name: "TO BE",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
            )
        },
        {
            id: "checklist",
            name: "Checklist",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            )
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'in-progress':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'pending':
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return 'Completado';
            case 'in-progress':
                return 'En Progreso';
            case 'pending':
                return 'Pendiente';
            default:
                return 'Desconocido';
        }
    };

    const renderStageContent = (stageId: string) => {
        const stage = stages.find(s => s.id === stageId);
        if (!stage) return null;

        return (
            <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                {stage.name} - {project.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{stage.description}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(stage.status)}`}>
                                {getStatusText(stage.status)}
                            </span>
                            <button className="px-4 py-2 bg-[#8C4799] text-white rounded-lg hover:bg-[#7a3c84] transition-colors">
                                Editar
                            </button>
                        </div>
                    </div>

                    {/* Stage Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stage.progress}%</div>
                            <div className="text-sm text-blue-600 dark:text-blue-400">Progreso</div>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stage.documents}</div>
                            <div className="text-sm text-green-600 dark:text-green-400">Documentos</div>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stage.tasks}</div>
                            <div className="text-sm text-purple-600 dark:text-purple-400">Tareas</div>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                                {stage.status === 'completed' ? '100%' : stage.status === 'in-progress' ? '75%' : '0%'}
                            </div>
                            <div className="text-sm text-orange-600 dark:text-orange-400">Completado</div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progreso General</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{stage.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div 
                                className="bg-[#8C4799] h-3 rounded-full transition-all duration-300" 
                                style={{ width: `${stage.progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Content based on stage */}
                    <div className="space-y-4">
                        {stageId === "as-is" && (
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Estado Actual</h4>
                                <div className="space-y-2">
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Infraestructura Actual</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">SQL Server 2019, Data Warehouse Legacy</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Procesos ETL</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">SSIS Packages, 15 procesos activos</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Fuentes de Datos</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">8 bases de datos, 3 APIs, 2 archivos CSV</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {stageId === "analisis" && (
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Análisis de Requerimientos</h4>
                                <div className="space-y-2">
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Gaps Identificados</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Falta de gobernanza, calidad de datos inconsistente</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Requerimientos Técnicos</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Escalabilidad, performance, seguridad</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Requerimientos de Negocio</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Tiempo real, self-service, analytics avanzado</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {stageId === "to-be" && (
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Arquitectura Objetivo</h4>
                                <div className="space-y-2">
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Data Lake House</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Delta Lake, Databricks, Azure Synapse</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Pipelines Modernos</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Azure Data Factory, Apache Airflow</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Gobernanza</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Purview, Data Catalog, Lineage</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {stageId === "checklist" && (
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Lista de Verificación</h4>
                                <div className="space-y-2">
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Validación Técnica</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Performance, escalabilidad, seguridad</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Validación de Negocio</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Requerimientos cumplidos, ROI</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="font-medium text-gray-800 dark:text-white">Documentación</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Arquitectura, procesos, procedimientos</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <PageBreadCrumb pageTitle={project.name} />
            
            <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                    <Link 
                        href="/data-architecture"
                        className="text-[#8C4799] hover:text-[#7a3c84] transition-colors"
                    >
                        ← Volver a Proyectos
                    </Link>
                </div>
                <h1 className="text-2xl font-bold text-black dark:text-white">
                    {project.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {project.description}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Propietario: {project.owner}</span>
                    <span>•</span>
                    <span>Inicio: {project.startDate}</span>
                    <span>•</span>
                    <span>Fin: {project.endDate}</span>
                </div>
            </div>

            {/* Stage Tabs */}
            <div className="mb-6">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => {
                            const stage = stages.find(s => s.id === tab.id);
                            return (
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
                                    {stage && (
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(stage.status)}`}>
                                            {stage.progress}%
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
                {renderStageContent(activeTab)}
            </div>
        </div>
    );
};

export default ProjectDetailsPage; 