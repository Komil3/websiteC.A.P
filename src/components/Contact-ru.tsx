import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Mail } from 'lucide-react';

/**
 * Contact Component - Russian Version
 * Contact information and final CTA
 */
export const ContactRu: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Здравствуйте, меня интересуют автозапчасти C.A.P.");
    window.open(`https://wa.me/971561747182?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:commonautoparts.uae@gmail.com', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight animate-slide-up">
              СВЯЖИТЕСЬ <span className="text-blue-500">С НАМИ</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 font-medium animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Готовы улучшить производительность вашего автомобиля? Свяжитесь с нами сейчас для экспертных советов и конкурентных цен.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp */}
            <div 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-slide-left"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                Заказы через WhatsApp
              </h3>
              <p className="text-gray-400 mb-4">
                Мгновенные сообщения для быстрых заказов и запросов
              </p>
              <p className="text-green-400 font-semibold">
                +971 56 174 71 82
              </p>
            </div>

            {/* Email */}
            <div 
              onClick={handleEmailClick}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-slide-right"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                Напишите нам
              </h3>
              <p className="text-gray-400 mb-4">
                Отправьте нам ваши требования и запросы
              </p>
              <p className="text-blue-400 font-semibold">
                commonautoparts.uae@gmail.com
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <MapPin className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Дубай, Объединенные Арабские Эмираты</span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Clock className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Доступны 24/7 для срочных заказов</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 animate-slide-up" style={{ animationDelay: '1s' }}>
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 animate-pulse-slow">
              ПОЧУВСТВУЙТЕ РАЗНИЦУ C.A.P
            </h3>
            <p className="text-xl text-blue-100 mb-8 font-medium">
              Присоединяйтесь к тысячам довольных клиентов, которые доверяют C.A.P для своих автомобильных потребностей
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-white text-blue-600 px-12 py-6 rounded-xl font-black text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-4 mx-auto shadow-2xl hover:shadow-white/25"
            >
              <MessageCircle className="h-8 w-8" />
              <span>НАЧАТЬ ЗАКАЗ СЕЙЧАС</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/C.A.P logo.jpg" 
              alt="C.A.P Логотип" 
              className="h-10 w-10 rounded-full object-cover border border-blue-600"
            />
            <div>
              <h4 className="text-xl font-bold text-white">C.A.P</h4>
              <p className="text-sm text-gray-400">Common Auto Parts</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Common Auto Parts. Все права защищены. | Создано для Производительности. Построено на Века.
          </p>
        </div>
      </div>
    </section>
  );
};