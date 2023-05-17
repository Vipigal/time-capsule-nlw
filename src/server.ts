import fastify from 'fastify';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = fastify();
const port = parseInt(process.env.PORT || '');
const prisma = new PrismaClient();


app.get('/', async () => {
	return 'Hello';
});


app.get('/users', async () => {
	const users = await prisma.usuario.findMany();
	return users;
});

app.listen({
	port: port ? port : 3030,
})
	.then(()=>{
		console.log(`Server rodando em: http://localhost:${port}`);
	});


