import { getProperties } from '@/lib/google-sheets';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const properties = await getProperties();
    return res.status(200).json(properties);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Failed to fetch properties' });
  }
}
