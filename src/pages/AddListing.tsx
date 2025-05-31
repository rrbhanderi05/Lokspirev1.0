import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Phone, MapPin, Image as ImageIcon, Send } from 'lucide-react';

interface FormData {
  businessName: string;
  category: string;
  description: string;
  contactName: string;
  phone: string;
  whatsapp: string;
  address: string;
  area: string;
  landmark: string;
  images: FileList | null;
}

const AddListing: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    category: '',
    description: '',
    contactName: '',
    phone: '',
    whatsapp: '',
    address: '',
    area: '',
    landmark: '',
    images: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message and redirect
    alert('Business listing submitted successfully!');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, images: e.target.files }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Add Your Business</h1>
          <p className="text-gray-600">Join our local business directory and reach more customers</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 glass-card p-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-700 flex items-center">
              <Building2 className="mr-2" size={24} />
              Business Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  className="input-field mt-1"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="input-field mt-1"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="retail">Retail Store</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="service">Service Provider</option>
                  <option value="professional">Professional Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  className="input-field mt-1"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-700 flex items-center">
              <Phone className="mr-2" size={24} />
              Contact Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                  Contact Person *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  className="input-field mt-1"
                  value={formData.contactName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="input-field mt-1"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                  WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  className="input-field mt-1"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-700 flex items-center">
              <MapPin className="mr-2" size={24} />
              Location Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="input-field mt-1"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                  Area/Locality *
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  required
                  className="input-field mt-1"
                  value={formData.area}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  id="landmark"
                  name="landmark"
                  className="input-field mt-1"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-700 flex items-center">
              <ImageIcon className="mr-2" size={24} />
              Business Images
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images *
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                required
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100
                  transition-all duration-200"
              />
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center py-3 text-lg"
            >
              <Send className="mr-2" size={20} />
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;