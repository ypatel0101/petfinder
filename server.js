const express = require('express');
const app = express();
const PORT = 8000; 

const pets = [
    { id: 1, name: 'Cody', owner: 'Mike' },
    { id: 2, name: 'Rex', owner: 'Sara' },
    { id: 3, name: 'Tiger', owner: 'Andrew' }
];

app.use(express.json());
app.use(express.static('public')); 


app.get('/api/v1/pets', (req, res) => {
  res.json(pets);
});

app.get('/api/v1/pets/:name', (req, res) => {
  const { name } = req.params;
  const pet = pets.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).send('Pet not found');
  }
});

app.get('/api/v1/pets/owner', (req, res) => {
  const { owner } = req.query;
  const pet = pets.find(p => p.owner.toLowerCase() === owner.toLowerCase());
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).send('Owner not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

