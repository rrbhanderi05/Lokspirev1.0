import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Business } from '../types';
import { useNavigate } from 'react-router-dom';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const { name, description, category, location, imageUrl } = business;
  const navigate = useNavigate();
  
  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('a')) {
      navigate(`/business/${business.id}`);
    }
  };

  return (
    <div 
      className="card group animate-slide-up cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-44 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-blue-800 line-clamp-1">{name}</h3>
        
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={16} className="mr-1.5 text-blue-500" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="flex gap-2 pt-2">
          <a 
            href={`https://wa.me/${business.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary flex-1 py-2 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={16} className="mr-1" />
            WhatsApp
          </a>
          <a 
            href={`tel:${business.contact}`} 
            className="btn-outline flex-1 py-2 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone size={16} className="mr-1" />
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;