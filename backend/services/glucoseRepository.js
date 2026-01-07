import * as repositories from "../repositories/useRepository.js";

export const registerGlucose = async (value, userId) => {
	if(value < 10 || value > 700) {
		throw new Error("Valor de glicemia inválido.");
	}

	return await repositories.saveGlicoseTest(value, userId);
}
