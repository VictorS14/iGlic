import * as glicoseRepo from "../repositories/useRepository.js";

export const registerGlucose = async (value, userId, measure_at) => {
	if(value < 10 || value > 700) {
		throw new Error("Valor de glicemia inválido.");
	}

	return await glicoseRepo.saveGlicoseTest(value, userId, measure_at);
}

export const updateMeasurement = async (glicoseValue, glicoseId, userId, measure_at) => {
	if(!glicoseValue || glicoseValue <= 0) {
		throw new Error("O valor de glicose deve ser positivo!")
	}

	const updated = await glicoseRepo.updateGlicoseValue(glicoseValue, glicoseId, userId, measure_at);

	if(!updated) throw new Error("Registro não encontrado.")

	return updated; 
}


export const getAverage = async (userId) => {
	const data = await glicoseRepo.getGlicoseAverageDay(userId);

	return {
		userId,
		average: data.media_do_dia || 0,
		quantity: data.quantidade_medicoes || 0,
		medments: data.medicoes || []
	}
}


export const getAverageByPeriod = async (userId, days) => {
	if(days > 30) {
		throw new Error("Para proteger o servidor o limite máximo é de 30 dias");
	}

	const data = await glicoseRepo.getGlicoseAverageByPeriod(userId, days);

	return {
		userId,
		period: `${days} days`,
		average: data.media || 0,
		quantity: data.quantidade_medicoes || 0,
		medments: data.medicoes || []
	};
}

export const deleteMeasurement = async  (glicoseId, userId) => {

	return glicoseRepo.deleteById(glicoseId, userId);
}

export const saveTargetRange = async (userId, veryHigh, targetRangeMin, targetRangeMax) => {
	return await glicoseRepo.saveUserTargetRange(userId, veryHigh, targetRangeMin, targetRangeMax)
}

export const getUserTargetRange = async (userId) => {
	return await glicoseRepo.getUserTargetRange(userId);
}

export const getRecentReadings = async (userId) => {
	return await glicoseRepo.getRecentReadings(userId);
}

export const getAllData = async (userId) => {
	const data = await glicoseRepo.getAllData(userId);

	const groupedData = groupByDate(data);
	return groupedData;
}

const groupByDate = (dados) => {
	return dados.reduce((acc, el) => {

		let dataStr;
		if (el.measure_at instanceof Date) {
			dataStr = el.measure_at.toISOString().split('T')[0];
		} else if (typeof el.measure_at === 'string') {
			dataStr = el.measure_at.split('T')[0];
		} else {
			return acc;
		}

		let grupoExistente = acc.find(grupo => grupo.data === dataStr);

		if(!grupoExistente) {
			grupoExistente = {
				data: dataStr,
				registros: []
			};
			acc.push(grupoExistente);
		}

		grupoExistente.registros.push({
			id: el.id,
			value: el.value
		});

		return acc;
	}, []) 
}