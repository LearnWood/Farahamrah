
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // اضافه شده برای حل مشکل CORS
const app = express();

app.use(cors()); // فعالسازی CORS
app.use(express.json());

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;

app.post('/send-whatsapp', async (req, res) => {
  const { name, estimate, link } = req.body;

  const messageData = {
    messaging_product: 'whatsapp',
    to: '989190355991',
    type: 'template',
    template: {
      name: 'analysis_ready',
      language: { code: 'fa' },
      components: [
        {
          type: 'body',
          parameters: [
            { type: 'text', text: name || 'کاربر محترم' },
            { type: 'text', text: estimate || 'نامشخص' },
            { type: 'text', text: link || 'https://yourdomain.com/download' }
          ]
        }
      ]
    }
  };

  try {
    const url = `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    };

    await axios.post(url, messageData, { headers });
    res.status(200).send('✅ پیام واتساپی ارسال شد');
  } catch (error) {
    console.error(error?.response?.data || error);
    res.status(500).send('❌ خطا در ارسال پیام واتساپ');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 WhatsApp sender server with CORS running on port ${PORT}`);
});
