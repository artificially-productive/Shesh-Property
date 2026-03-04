import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};


// Create auth client using the JSON file directly
const serviceAccountAuth = new JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Initialize the document
const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);

// Helper to ensure doc is loaded
async function getDoc() {
  await doc.loadInfo();
  return doc;
}

// ============ PROPERTIES ============
export async function getProperties() {
  try {
    const document = await getDoc();
    const sheet = document.sheetsByTitle['Properties']; // tab name must be exactly "Properties"
    const rows = await sheet.getRows();
    
    return rows.map((row) => ({
      id: row.get('id'),
      title: row.get('title'),
      location: row.get('location'),
      price: row.get('price'),
      type: row.get('type'),
      category: row.get('category'),
      bedrooms: row.get('bedrooms'),
      bathrooms: row.get('bathrooms'),
      area: row.get('area'),
      floor: row.get('floor'),
      totalFloors: row.get('totalFloors'),
      furnishing: row.get('furnishing'),
      parking: row.get('parking'),
      possession: row.get('possession'),
      reraId: row.get('reraId'),
      projectName: row.get('projectName'),
      builder: row.get('builder'),
      propertyAge: row.get('propertyAge'),
      maintenance: row.get('maintenance'),
      amenities: row.get('amenities'),
      nearbyLandmarks: row.get('nearbyLandmarks'),
      mapLink: row.get('mapLink'),
      description: row.get('description'),
      images: [
        row.get('image 1'),
        row.get('image 2'),
        row.get('image 3'),
        row.get('image 4'),
        row.get('image 5'),
      ].filter(Boolean),
      status: row.get('status'),
    }));
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error ; // instead of return [];
  }
}

// ============ REVIEWS ============
export async function getReviews() {
  try {
    const document = await getDoc();
    const sheet = document.sheetsByTitle['Reviews'];
    const rows = await sheet.getRows();
    
    return rows.map(row => ({
      id: row.get('id'),
      name: row.get('name'),
      text: row.get('text'),
      location: row.get('location'),
      rating: row.get('rating'),
    }));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

// ============ LEADS (Form Submissions) ============
export async function addLead(data) {
  try {
    const document = await getDoc();
    const sheet = document.sheetsByTitle['Leads'];
    
    await sheet.addRow({
      name: data.name,
      phone: data.phone,
      email: data.email,
      intent: data.intent,
      location: data.location,
      budget: data.budget,
      date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding lead:', error);
    return { success: false, error: error.message };
  }
}

// Check if Google Sheets is connected
export function isGoogleSheetsConnected() {
  return !!(SHEET_ID && credentials);
}
