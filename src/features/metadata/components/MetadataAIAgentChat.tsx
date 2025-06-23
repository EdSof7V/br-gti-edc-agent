'use client'
import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const MetadataAIAgentChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente IA especializado en metadatos. Puedo ayudarte con:\n\n• Búsqueda y exploración de metadatos\n• Documentación de activos de datos\n• Análisis de linaje de datos\n• Recomendaciones de calidad\n\n¿En qué puedo ayudarte hoy?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response with metadata-specific examples
    setTimeout(() => {
      let aiResponse = '';
      const userText = inputMessage.toLowerCase();
      
      if (userText.includes('buscar') || userText.includes('encontrar')) {
        aiResponse = 'He encontrado 3 activos de datos relacionados con tu búsqueda:\n\n• customers_table (Base de datos: sales_db)\n• customer_api (API: REST Service)\n• customer_analytics.csv (Data Lake)\n\n¿Te gustaría ver más detalles de alguno de estos activos?';
      } else if (userText.includes('linaje') || userText.includes('trazabilidad')) {
        aiResponse = 'El linaje de datos muestra el flujo completo desde las fuentes originales hasta los reportes finales. Puedo ayudarte a:\n\n• Visualizar el flujo de datos\n• Identificar dependencias\n• Analizar el impacto de cambios\n\n¿Qué aspecto del linaje te interesa explorar?';
      } else if (userText.includes('calidad') || userText.includes('validación')) {
        aiResponse = 'La calidad de datos es fundamental. He detectado:\n\n• 5 reglas de validación activas\n• 2 alertas de calidad pendientes\n• Score general: 92%\n\n¿Quieres revisar las alertas o configurar nuevas reglas?';
      } else if (userText.includes('documentar') || userText.includes('catalogar')) {
        aiResponse = 'Para documentar un nuevo activo de datos, necesito:\n\n• Nombre del activo\n• Tipo (tabla, API, archivo)\n• Ubicación/fuente\n• Propietario\n• Descripción\n\n¿Tienes esta información disponible?';
      } else {
        aiResponse = 'Como asistente de metadatos, puedo ayudarte con búsquedas, documentación, análisis de linaje y calidad de datos. ¿Puedes ser más específico sobre lo que necesitas?';
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg shadow-lg border border-indigo-200 dark:border-indigo-800 relative overflow-hidden">
      {/* Magical background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-16 left-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-20 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-8 right-16 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
      </div>

      {/* Chat Header */}
      <div className="flex items-center p-4 border-b border-indigo-200 dark:border-indigo-700 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 relative">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg relative">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {/* Sparkle effects around the icon */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-300 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-white flex items-center">
            Asistente de Metadatos
            <span className="ml-2 text-cyan-300 animate-pulse">✨</span>
          </h3>
          <p className="text-sm text-indigo-100">IA especializada en metadatos</p>
        </div>
        {/* Floating stars */}
        <div className="absolute top-2 right-4 text-cyan-300 animate-bounce">⭐</div>
        <div className="absolute bottom-2 right-8 text-purple-300 animate-pulse">✨</div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg relative ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-white to-indigo-50 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-white shadow-md border border-indigo-100 dark:border-indigo-700'
              }`}
            >
              {message.sender === 'ai' && (
                <div className="absolute -top-1 -left-1 text-cyan-400 animate-pulse">✨</div>
              )}
              <p className="text-sm whitespace-pre-line">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              {message.sender === 'ai' && (
                <div className="absolute -bottom-1 -right-1 text-purple-400 animate-bounce">⭐</div>
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md border border-indigo-200 dark:border-indigo-700 relative">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <div className="absolute -top-1 -left-1 text-cyan-400 animate-pulse">✨</div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-indigo-200 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="flex space-x-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pregunta sobre metadatos, linaje, calidad..."
            className="flex-1 p-3 border border-indigo-300 dark:border-indigo-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg relative overflow-hidden group"
          >
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            {/* Sparkle effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
          </button>
        </div>
      </div>
    </div>
  );
}; 