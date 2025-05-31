import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle, MapPin, Clock, Share2 } from 'lucide-react';
import { useBusiness } from '../hooks/useBusiness';

const BusinessDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { business, loading, error } = useBusiness(id!);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-4 animate-fade-in">
        <div className="animate-pulse space-y-4">
          <div className="h-72 bg-gray-200 rounded-3xl"></div>
          <div className="h-8 bg-gray-200 rounded-full w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error || !business) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-4 flex items-center justify-center">
        <div className="text-center glass-card p-8">
          <p className="text-red-600 mb-4">Failed to load business details</p>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: business.name,
          text: business.description,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 animate-fade-in">
      <div className="relative">
        <div className="h-72 sm:h-96 overflow-hidden">
          <img 
            src={business.imageUrl} 
            alt={business.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>
        
        <button 
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 p-3 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300 shadow-lg"
        >
          <ArrowLeft size={24} className="text-gray-800" />
        </button>
        
        {navigator.share && (
          <button 
            onClick={handleShare}
            className="absolute top-4 right-4 p-3 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300 shadow-lg"
          >
            <Share2 size={24} className="text-gray-800" />
          </button>
        )}
      </div>

      <div className="p-6 -mt-20 relative">
        <div className="max-w-2xl mx-auto glass-card p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-blue-800">{business.name}</h1>
            <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-xl font-medium">
              {business.category}
            </span>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed text-lg">{business.description}</p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center text-gray-600">
              <MapPin size={24} className="mr-4 text-blue-600" />
              <span className="text-lg">{business.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={24} className="mr-4 text-blue-600" />
              <span className="text-lg">Open: 9:00 AM - 9:00 PM</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={`https://wa.me/${business.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary flex-1 py-4 text-lg justify-center"
            >
              <MessageCircle size={24} className="mr-2" />
              Message on WhatsApp
            </a>
            <a 
              href={`tel:${business.contact}`} 
              className="btn-outline flex-1 py-4 text-lg justify-center"
            >
              <Phone size={24} className="mr-2" />
              Call Business
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;