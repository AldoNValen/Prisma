const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

  app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
  });

  app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });


  app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.get('/tipo', async (req, res) => {
    const alltipo =  await prisma.tipo.findMany({});
    res.json(alltipo);
  });

  app.get('/tipo/:id', async (req, res) => {
    const id = req.params.id;
    const tipo = await prisma.tipo.findUnique({where: {id: parseInt(id)}});
    res.json(tipo);
  });

  app.post('/tipo', async (req, res) => {
    const explorer = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander,
      enrollments: req.body.enrollments
     };
    const message = 'tipo creado.';
    await prisma.tipo.create({data: explorer});
    return res.json({message});
  });

  app.put('/tipo/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.tipo.update({
		where: {
			id: id
		},
		data: {
			missionCommander: req.body.missionCommander
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/tipo/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.tipo.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});


app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});