import Fingerprint from 'fingerprintjs';

export default httpClient => ({
  create: ({
    description = '', imageUrl, coords, type,
  }) => {
    const fp = new Fingerprint().get();
    const payload = {
      image_url: imageUrl,
      type,
      description,
      finger_print: String(fp),
      lat: String(coords.lat),
      lon: String(coords.lon),
    };

    return httpClient.post('alert', payload);
  },
});
