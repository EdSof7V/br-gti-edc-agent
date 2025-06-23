"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "@/context/SessionContext";
import { jwtDecode } from "jwt-decode";
import PageBreadCrumb from "@/shared/components/common/PageBreadCrumb";
import Link from "next/link";

interface DecodedToken {
  sub?: string;
  [key: string]: any;
}

const QuickAccessCard = ({ title, description, icon, link, color }) => {
  return (
    <Link href={link} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 group">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${color}`}>
              {icon}
            </div>
            <div className="text-[#8C4799] group-hover:translate-x-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const RecentActivityCard = ({ title, description, time, type, status }) => {
  const getStatusColor = (status) => {
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

  const getTypeIcon = (type) => {
    switch (type) {
      case 'discovery':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-blue-600 dark:text-blue-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        );
      case 'metadata':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-purple-600 dark:text-purple-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        );
      case 'architecture':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-600 dark:text-indigo-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12l3-3m0 0l3-3m-3 3h7.5M3.75 12l3 3m0 0l3 3m-3-3h7.5m-7.5-6a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-600 dark:text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
            {getTypeIcon(type)}
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-800 dark:text-white">{title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(status)}`}>
            {status === 'completed' ? 'Completado' : status === 'in-progress' ? 'En Progreso' : 'Pendiente'}
          </span>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {time}
        </div>
      </div>
    </div>
  );
};

const DataInsightCard = ({ title, value, change, trend, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
          <div className="flex items-center mt-1">
            <span className={`text-xs ${trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {trend === 'up' ? '↗' : '↘'} {change}
            </span>
          </div>
        </div>
        <div className="text-[#8C4799]">
          {icon}
        </div>
      </div>
    </div>
  );
};

export const HomepageApp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const { session } = useSession();

  function safelyDecodeToken(token: string): DecodedToken | null {
    try {
      return jwtDecode(token) as DecodedToken;
    } catch (error) {
      return null;
    }
  }

  const decodedToken: DecodedToken | null = session?.accessToken
    ? safelyDecodeToken(session.accessToken)
    : null;

  const userId = decodedToken?.sub || null;

  // Quick Access Modules
  const quickAccessModules = [
    {
      id: 1,
      title: 'Data Domain',
      description: 'Descubre y gestiona dominios de datos empresariales',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      ),
      link: '/data-domain',
      color: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      id: 2,
      title: 'Metadata',
      description: 'Explora y cataloga metadatos de la organización',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-600 dark:text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      link: '/metadata',
      color: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      id: 3,
      title: 'Arquitectura de Datos Foro',
      description: 'Gestiona proyectos de arquitectura de datos',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12l3-3m0 0l3-3m-3 3h7.5M3.75 12l3 3m0 0l3 3m-3-3h7.5m-7.5-6a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/data-architecture',
      color: 'bg-indigo-100 dark:bg-indigo-900/20'
    }
  ];

  // Recent Activities
  const recentActivities = [
    {
      id: 1,
      title: 'Nuevo dominio descubierto',
      description: 'Se identificó el dominio "Customer Analytics" en Data Domain',
      time: 'Hace 2 horas',
      type: 'discovery',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Metadatos actualizados',
      description: 'Se actualizaron 45 metadatos en el catálogo',
      time: 'Hace 4 horas',
      type: 'metadata',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Proyecto de arquitectura iniciado',
      description: 'Se creó el proyecto "NAME ARCH SOLUT - PROJECT"',
      time: 'Hace 1 día',
      type: 'architecture',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Análisis de calidad completado',
      description: 'Se completó el análisis de calidad para 156 tablas',
      time: 'Hace 2 días',
      type: 'discovery',
      status: 'completed'
    }
  ];

  // Data Insights
  const dataInsights = [
    {
      id: 1,
      title: 'Dominios Activos',
      value: '12',
      change: '+2 este mes',
      trend: 'up',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Metadatos Documentados',
      value: '1,247',
      change: '+89 esta semana',
      trend: 'up',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Proyectos Activos',
      value: '4',
      change: '+1 este mes',
      trend: 'up',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12l3-3m0 0l3-3m-3 3h7.5M3.75 12l3 3m0 0l3 3m-3-3h7.5m-7.5-6a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Calidad de Datos',
      value: '94.2%',
      change: '+2.1% este mes',
      trend: 'up',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        setTimeout(() => {
          setUserData({ id: userId, name: "Jose Alegre" });
          setLoading(false);
        }, 500);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8C4799] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-red-500 text-2xl mb-4">⚠️</div>
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBreadCrumb pageTitle="Inicio" />
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          ¡Bienvenido al Sistema de Gestión de Datos!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Gestiona, descubre y optimiza la arquitectura de datos de tu organización
        </p>
      </div>

      {/* Data Insights Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {dataInsights.map(insight => (
          <DataInsightCard
            key={insight.id}
            title={insight.title}
            value={insight.value}
            change={insight.change}
            trend={insight.trend}
            icon={insight.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Access Modules */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Acceso Rápido</h2>
          <div className="space-y-4">
            {quickAccessModules.map(module => (
              <QuickAccessCard
                key={module.id}
                title={module.title}
                description={module.description}
                icon={module.icon}
                link={module.link}
                color={module.color}
              />
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <RecentActivityCard
                key={activity.id}
                title={activity.title}
                description={activity.description}
                time={activity.time}
                type={activity.type}
                status={activity.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};