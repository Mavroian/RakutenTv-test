// Section 1
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// Section 2
const app = express();
app.use(cors());
// Section 3
app.get('/', (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get('/estrenos-imprescindibles', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/estrenos-imprescindibles-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/peliculas-gratis', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/peliculas-gratis?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/starzplay-series-exclusivas-y-originales', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/starzplay-series-exclusivas-y-originales?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/free-rakuten-stories', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/free-rakuten-stories?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/peliculas-mas-vistas-en-alquiler', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/peliculas-mas-vistas-en-alquiler?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/estrenos-recomendados-en-taquilla', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/estrenos-recomendados-en-taquilla-416e44cd-d691-4802-905c-a045325f49b1?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/rakuten-tv-suscripcion-mas-populares', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/rakuten-tv-suscripcion-mas-populares?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/universo-dc', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/universo-dc?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/animate', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/animate?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/aventuras-de-animacion-en-alquiler', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/aventuras-de-animacion-en-alquiler?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/free-tv-infantil', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/free-tv-infantil?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/peliculas-populares-en-compra', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/peliculas-populares-en-compra?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/alquila-por-1-99-o-menos', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/alquila-por-1-99-o-menos?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/alquila-por-2-99-o-menos', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/alquila-por-2-99-o-menos?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/alquila-por-3-99-o-menos', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/alquila-por-3-99-o-menos?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/free-documentales', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/free-documentales?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/starzplay-series-policiacas-y-de-suspense', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/starzplay-series-policiacas-y-de-suspense?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/adrenalina-en-vena', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/adrenalina-en-vena?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/risas-y-buen-rollo', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/risas-y-buen-rollo?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/te-atreves-escalofrios-asegurados', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/te-atreves-escalofrios-asegurados?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/emocion-a-flor-de-piel', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/emocion-a-flor-de-piel?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});
app.get('/historias-de-otro-mundo', (req, res) => {
  axios.get('https://gizmo.rakuten.tv/v3/lists/historias-de-otro-mundo?classification_id=5&device_identifier=web&locale=es&market_code=es')
    .then(response => {
      res.send(response.data);
    });
});

// Section 4
app.listen(3000, () => {
  console.log('server started on port 3000');
});