import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Tag, Briefcase, MapPin } from 'lucide-react';
import axios from 'axios';

interface Prospect {
  _id: string;
  nom: string;
  prenom: string;
  email: { address: string; created_at: string }[];
  telephone: { number: string; created_at: string }[];
  adresse: {
    rue: string;
    ville: string;
    code_postal: string;
    pays: string;
  };
  userType: string;
  entreprise: string;
  statut: string;
  Temperature: number;
}

const ProspectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [prospect, setProspect] = useState<Prospect | null>(null);

  useEffect(() => {
    const fetchProspectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/prospects/${id}`);
        setProspect(response.data);
      } catch (error) {
        console.error('Error fetching prospect details:', error);
      }
    };

    if (id) {
      fetchProspectDetails();
    }
  }, [id]);

  if (!prospect) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Prospect Details</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <User className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-medium">Name:</span>
            <span className="ml-2">{`${prospect.prenom} ${prospect.nom}`}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-medium">Email:</span>
            <span className="ml-2">{prospect.email[0]?.address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-medium">Phone:</span>
            <span className="ml-2">{prospect.telephone[0]?.number}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-medium">Type:</span>
            <span className="ml-2">{prospect.userType}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-medium">Address:</span>
            <span className="ml-2">{`${prospect.adresse.rue}, ${prospect.adresse.ville}, ${prospect.adresse.code_postal}, ${prospect.adresse.pays}`}</span>
          </div>
          <div className="flex items-center">
            <Tag className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-medium">Status:</span>
            <span className="ml-2">{prospect.statut}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <span className="font-medium">Temperature:</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${prospect.Temperature * 10}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectDetails;