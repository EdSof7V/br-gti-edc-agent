'use client'
import React, { useState } from "react";
import { MetadataAIAgentChat } from "./MetadataAIAgentChat";

export const MetadataPage = () => {
  const [activeTab, setActiveTab] = useState('explorer');

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('explorer')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'explorer'
                ? 'border-[#8C4799] text-[#8C4799]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Explorador
          </button>
          <button
            onClick={() => setActiveTab('catalog')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'catalog'
                ? 'border-[#8C4799] text-[#8C4799]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Catálogo
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
              <span className="absolute -top-1 -right-2 text-cyan-400 animate-pulse text-xs">✨</span>
            </span>
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="col-span-12 space-y-6 xl:col-span-7">
        {activeTab === 'explorer' && (
          <div className="space-y-6">
            {/* Metadata Explorer Overview */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Metadata Explorer Overview</h3>
              
              {/* Search and Filters */}
              <div className="mb-6">
                <div className="flex space-x-4 mb-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Buscar metadatos..."
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C4799] focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    />
                  </div>
                  <button className="px-4 py-3 bg-[#8C4799] text-white rounded-lg hover:bg-[#7a3c84] transition-colors">
                    Buscar
                  </button>
                </div>
                
                {/* Filter Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                    Base de Datos
                  </span>
                  <span className="px-3 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                    APIs
                  </span>
                  <span className="px-3 py-1 text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
                    Archivos
                  </span>
                  <span className="px-3 py-1 text-xs bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full">
                    Documentados
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,234</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">Total Activos</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">89%</div>
                  <div className="text-sm text-green-600 dark:text-green-400">Documentados</div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">45</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">Dominios</div>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">12</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">Pendientes</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800 dark:text-white">Actividad Reciente</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 dark:text-white">Nuevo activo agregado: <span className="font-medium">inventory_system</span></div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Hace 30 minutos • Por Jose Alegre</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 dark:text-white">Metadatos actualizados: <span className="font-medium">customer_data</span></div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Hace 2 horas • Por Maria Rodriguez</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'catalog' && (
          <div className="space-y-6">
            {/* Catálogo de Metadatos - Ejemplo Mejorado */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Catálogo de Metadatos</h3>
              
              {/* Estadísticas Rápidas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,234</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">Activos de Datos</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">89%</div>
                  <div className="text-sm text-green-600 dark:text-green-400">Documentados</div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">45</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">Dominios</div>
                </div>
              </div>

              {/* Filtros de Catálogo */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <button className="px-3 py-1 text-sm bg-[#8C4799] text-white rounded-lg">Todos</button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">Bases de Datos</button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">APIs</button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">Archivos</button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">Pendientes</button>
                </div>
              </div>

              {/* Lista de Activos Recientes */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800 dark:text-white">Activos Recientes</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">customers_table</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Base de datos: sales_db • Propietario: Jose Alegre</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                        Activo
                      </span>
                      <button className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
                        Ver
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">api_orders</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">API REST • 12 endpoints • Propietario: Maria Rodriguez</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                        En Revisión
                      </span>
                      <button className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
                        Ver
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">sales_report.csv</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Archivo CSV • 2.5MB • Propietario: Carlos Lopez</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full">
                        Pendiente
                      </span>
                      <button className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
                        Ver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'ai-agent' && <MetadataAIAgentChat />}
      </div>
    </div>
  );
}; 