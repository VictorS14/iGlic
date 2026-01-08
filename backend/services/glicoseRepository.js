import * as glicoseRepo from "../repositories/useRepository.js";

export const registerGlucose = async (value, userId) => {
	if(value < 10 || value > 700) {
		throw new Error("Valor de glicemia inválido.");
	}

	return await glicoseRepo.saveGlicoseTest(value, userId);
}

export const updateMeasurement = async (glicoseValue, glicoseId, userId) => {
	if(!glicoseValue || glicoseValue <= 0) {
		throw new Error("O valor de glicose deve ser positivo!")
	}

	const updated = await glicoseRepo.updateGlicoseValue(glicoseValue, glicoseId, userId);

	if(!updated) throw new Error("Registro não encontrado.")

	return updated; 
}
