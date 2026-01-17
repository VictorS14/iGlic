import * as glicoseService from "../services/glicoseService.js";

export const store = async (req, res) => {
	try {
		const { value, userId} = req.body;
		const measurement = await glicoseService.registerGlucose(value, userId);

		return res.status(201).json(measurement);
	} catch(error) {
		
		return res.status(400).json({ error: error.message });
	}
};

export const update = async (req, res) => {
	try {
		const { glicoseValue, glicoseId, userId } = req.body;
		const measurementUpdated = await glicoseService.updateMeasurement(glicoseValue, glicoseId, userId);

		return res.status(200).json(measurementUpdated);
	} catch(error) {

		return res.status(400).json({ error: error.message });
	}
};


