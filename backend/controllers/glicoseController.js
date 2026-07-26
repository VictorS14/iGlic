import * as glicoseService from "../services/glicoseService.js";

export const store = async (req, res) => {
	try {
		const { glicoseValue, measure_at} = req.body;
		const { userId } = req.user;
		const measurement = await glicoseService.registerGlucose(glicoseValue, userId, measure_at);

		return res.status(201).json(measurement);
	} catch(error) {
		
		return res.status(400).json({ error: error.message });
	}
};

export const update = async (req, res) => {
	try {
		const { id } = req.params;
		const { id: userId } = req.user;
		const { glicoseValue, measure_at } = req.body;
		const measurementUpdated = await glicoseService.updateMeasurement(
			glicoseValue,
			id,
			userId,
			measure_at
			);

		return res.status(200).json(measurementUpdated);
	} catch(error) {
		return res.status(400).json({ error: error.message });
	}
};

export const average = async (req, res) => {
	try {
		const { id: userId } = req.user;
		const data = await glicoseService.getAverage(userId);

		return res.status(200).json(data);
	} catch(error) {

		return res.status(404).json({ error: error.message });
	}
};

export const averageByPeriod = async (req, res) => {
	try {
		const { id: userId } = req.user;
		const { days } = req.query;
		const data = await glicoseService.getAverageByPeriod(userId, days)

		return res.status(200).json(data);
	} catch(error) {
		
		return res.status(404).json({ error: error.message });
	}
};

export const removeMeasurement = async (req, res) => {
	try {
		const { id } = req.params;
		const { id: userId } = req.user;	
		const deteled = await glicoseService.deleteMeasurement(id, userId);

		return res.status(200).json(deteled);
	} catch(error) {
		return res.status(404).json({ error: error.message });
	}
};

export const saveTargetRange = async (req, res) => {
	try {
		const { id: userId } = req.user;
		const { veryHigh, targetRangeMin, targetRangeMax} = req.body;
		const range = await glicoseService.saveTargetRange(userId, veryHigh, targetRangeMin, targetRangeMax);
		return res.status(200).json(range);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	};
};

export const getTargetRange = async (req, res) => {
	try {
		const { id: userId } = req.user;
		const range = await glicoseService.getUserTargetRange(userId);
		return res.status(200).json(range);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	};
};

export const getRecentReadings = async (req,res) => {
	try {
		const { id: userId } = req.user;
		const recentReadings = await glicoseService.getRecentReadings(userId);
		return res.status(200).json(recentReadings);
	} catch (error) {
		return res.status(400).json({error: error.message});
	};
};

export const getAllData = async (req, res) => {	
	try {
		const { id: userId } = req.user;
		const allData = await glicoseService.getAllData(userId);
		return res.status(200).json(allData);
	} catch (error) {
		return res.status(400).json({error: error.message});
	}
}
