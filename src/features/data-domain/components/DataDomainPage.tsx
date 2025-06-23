'use client'
import React, { useState } from "react";
import { AIAgentChat } from "./AIAgentChat";

export const DataDomainPage = () => {
  const [activeTab, setActiveTab] = useState('discovery');

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('discovery')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'discovery'
                ? 'border-[#8C4799] text-[#8C4799]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Discovery
          </button>
          <button
            onClick={() => setActiveTab('diagram')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'diagram'
                ? 'border-[#8C4799] text-[#8C4799]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Diagram / DDL
          </button>
          <button
            onClick={() => setActiveTab('ai-agent')}
            className={`py-2 px-1 border-b-2 font-medium text-sm relative ${
              activeTab === 'ai-agent'
                ? 'border-[#8C4799] text-[#8C4799]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <span className="relative">
              Agente IA
              <span className="absolute -top-1 -right-2 text-yellow-400 animate-pulse text-xs">✨</span>
            </span>
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="col-span-12 space-y-6 xl:col-span-7">
        {activeTab === 'discovery' && (
          <div className="space-y-6">
            {/* Discovery Overview */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Data Discovery Overview</h3>
              
              {/* Discovery Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">156</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">Fuentes Descubiertas</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">2,847</div>
                  <div className="text-sm text-green-600 dark:text-green-400">Tablas Encontradas</div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">89</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">APIs Identificadas</div>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">12</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">Archivos CSV</div>
                </div>
              </div>

              {/* Recent Discoveries */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800 dark:text-white">Descubrimientos Recientes</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">sales_database</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">SQL Server • 45 tablas • Descubierto hace 2 horas</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                      Nuevo
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">customer_api_v2</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">REST API • 15 endpoints • Descubierto hace 5 horas</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                      Actualizado
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        )}
        {activeTab === 'diagram' && (
          <div className="space-y-6">
            {/* Diagram Overview */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Diagram & DDL Management</h3>
              
              {/* Diagram Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">23</div>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400">Diagramas Creados</div>
                </div>
                <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">156</div>
                  <div className="text-sm text-teal-600 dark:text-teal-400">DDLs Generados</div>
                </div>
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">89%</div>
                  <div className="text-sm text-pink-600 dark:text-pink-400">Precisión ER</div>
                </div>
              </div>

              {/* Recent Diagrams */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800 dark:text-white">Diagramas Recientes</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">E-commerce ER Diagram</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">12 entidades • 8 relaciones • Creado hace 1 día</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
                        Ver
                      </button>
                      <button className="px-3 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full hover:bg-green-200 dark:hover:bg-green-800">
                        Exportar
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">Customer Analytics DDL</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">8 tablas • 45 columnas • Generado hace 3 días</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
                        Ver
                      </button>
                      <button className="px-3 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full hover:bg-green-200 dark:hover:bg-green-800">
                        Descargar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Original Diagram Component */}
          </div>
        )}
        {activeTab === 'ai-agent' && <AIAgentChat />}
      </div>
    </div>
  );
}; 