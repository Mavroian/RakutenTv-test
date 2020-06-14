
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.get('/:type/:movie', (req, res) => {
  const { movie, type } = req.params
  try {
    axios.get(`https://gizmo.rakuten.tv/v3/${type}/${movie}?classification_id=5&device_identifier=web&locale=es&market_code=es`)
      .then(response => {
        res.send(response.data);
      });
  } catch (error) {
    console.log(error)
  }

});
app.post('/:type/:movie/trailer', (req, res) => {
  const { movie, type } = req.params
  const header = {
    audio_language: "SPA",
    audio_quality: "2.0",
    content_id: `${movie}`,
    content_type: `${type}`,
    device_serial: "device_serial_1",
    device_stream_video_quality: "FHD",
    player: "web:PD-NONE",
    subtitle_language: "MIS",
    video_type: "trailer"
  }
  try {
    axios.post(`https://gizmo.rakuten.tv/v3/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es`, header)
      .then(response => {
        res.send(response.data);
      });
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`server started on port ${port} `);
});