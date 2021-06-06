const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
   const {title, owner} = request.query;

   console.log(owner)
   console.log(title)
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response)=>{
  const {title, owner} = request.body

  console.log(owner);
  console.log(title);

  
    return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
]);
});

app.put('/projects/:id', (request, response)=>{
    const { id } = request.params

    console.log(params)
    
    return response.json([
     'Projeto 2',
     'Projeto 3',
 ]);
 });

app.listen(3333,() =>{
    console.log('Back-end started')
});
