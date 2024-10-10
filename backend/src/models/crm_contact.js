import mongoose from 'mongoose';

const { Schema } = mongoose;

const ContactSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: [{
    address: String,
    created_at: Date
  }],
  telephone: [{
    number: String,
    created_at: Date
  }],
  Discord: [{
    Username: String,
    User_tag: String,
    userID: String,
    created_at: Date
  }],
  adresse: {
    rue: String,
    ville: String,
    code_postal: String,
    pays: String
  },
  userType: String,
  entreprise: String,
  Jeux_joues: [{
    Nom_du_jeu: String,
    Pseudo_de_jeu: String,
    poste: String,
    created_at: Date
  }],
  tags: { type: Schema.Types.ObjectId, ref: 'Tag' },
  date_creation: Date,
  statut: String,
  Temperature: Number,
  preferences: {
    frequence_contact: String,
    canal_prefere: String,
    interets: [String]
  },
  notes: [{
    date: Date,
    contenu: String,
    auteur: { type: Schema.Types.ObjectId, ref: 'User' }
  }]
});

export default mongoose.model('Contact', ContactSchema, 'crm_contact');