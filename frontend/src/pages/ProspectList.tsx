import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../config';

interface Prospect {
  _id: string;
  nom: string;
  prenom: string;
  email: { address: string; created_at: string }[];
  telephone: { number: string; created_at: string }[];
  statut: string;
}

const ProspectList: React.FC = () => {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProspects = async () => {
      console.log('Fetching prospects...');
      try {
        console.log('API URL:', `${API_URL}/prospects`);
        const response = await axios.get(`${API_URL}/prospects`);
        console.log('Prospects data:', response.data);
        setProspects(response.data);
      } catch (error) {
        console.error('Error fetching prospects:', error);
        if (axios.isAxiosError(error)) {
          console.error('Axios error details:', error.response?.data);
        }
        setError('Failed to fetch prospects. Please try again later.');
      }
    };
 
    fetchProspects();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Prospect List</h1>
      {prospects.length === 0 ? (
        <p>No prospects found.</p>
      ) : (
        <ul className="space-y-4">
          {prospects.map((prospect) => (
            <li key={prospect._id} className="bg-white p-4 rounded-lg shadow">
              <Link to={`/prospects/${prospect._id}`} className="flex items-center space-x-4">
                <User className="text-gray-400" />
                <div>
                  <h2 className="text-xl font-semibold">{`${prospect.prenom} ${prospect.nom}`}</h2>
                  <p className="text-gray-600">{prospect.email[0]?.address}</p>
                  <p className="text-gray-600">{prospect.telephone[0]?.number}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{prospect.statut}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProspectList;