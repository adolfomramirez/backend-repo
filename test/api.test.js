const axios = require('axios');

test('Debe obtener la lista de razas de perros', async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    expect(response.status).toBe(200);
    expect(response.data.message).toBeDefined();
});
