import { addLead } from '@/lib/google-sheets';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const result = await addLead(req.body);
    
    if (result.success) {
      return res.status(200).json({ message: 'Lead submitted successfully' });
    } else {
      return res.status(500).json({ message: 'Failed to submit lead', error: result.error });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
