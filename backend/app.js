
const useApi = async () => {
let urlPost = 'http://localhost:3000/glicose'

const params = new URLSearchParams({
	id: 8,
	glicoId: 71,
	days: 30
})
let urlGetAverage = `http://localhost:3000/glicose/average?userId=${params.get('id')}`
let urlGet = `http://localhost:3000/glicose/average-period?userId=${params.get('id')}&days=${params.get('days')}`
let urlDelete = `http://localhost:3000/glicose/${params.get('glicoId')}?userId=${params.get('id')}`
let urlPut = `http://localhost:3000/glicose/${params.get('glicoId')}`

	const data = {
		value: 324,
		userId: 8
	}


	try {
		// post
		 const res = await fetch(urlPost, {
		 	method: 'POST',
		 	headers: {
		 		'Content-Type': 'application/json'
		 	},
		 	body: JSON.stringify(data)
		 })

		//delete
		// const res = await fetch(urlDelete, {method: 'DELETE'})

		//get
		// const res = await fetch(urlGet)

		// PUT
		// const res = await fetch(urlPut, {
		// 	method: 'PUT',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(data)
		// })

		if(!res.ok) {
			let errorMessage = `Erro: ${res.status}`;
			try {
				const errorData = await res.json();
				errorMessage = errorData.error || JSON.stringify(errorData); // Tenta pegar 'error' ou o JSON completo
			} catch (jsonError) {
				// Se não conseguir parsear como JSON, usa o status
				console.error("Erro ao parsear a resposta de erro como JSON:", jsonError);
			}
			throw new Error(errorMessage);
		}

		const output = await res.json();
		console.log(output)
	} catch(e) {
	
		console.log(e);
	}
}

useApi();
