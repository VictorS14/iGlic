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
		const { id } = req.params;
		const { glicoseValue, userId } = req.body;
		const measurementUpdated = await glicoseService.updateMeasurement(
			glicoseValue,
			id,
			userId
			);

		return res.status(200).json(measurementUpdated);
	} catch(error) {

		return res.status(400).json({ error: error.message });
	}
};

export const average = async (req, res) => {
	try {
		const { userId } = req.query;
		const data = await glicoseService.getAverage(userId);

		return res.status(200).json(data);
	} catch(error) {

		return res.status(404).json({ error: error.message });
	}
};

export const averageByPeriod = async (req, res) => {
	try {
		const { userId, days } = req.query;
		const data = await glicoseService.getAverageByPeriod(userId, days)

		return res.status(200).json(data);
	} catch(error) {
		
		return res.status(404).json({ error: error.message });
	}
};

export const removeMeasurement = async (req, res) => {
	try {
		const { id } = req.params;
		const { userId } = req.body;
		const deteled = await glicoseService.deleteMeasurement(id, userId);

		return res.status(200).json(deteled);
	} catch(error) {
		return res.status(404).json({ error: error.message });
	}
};


