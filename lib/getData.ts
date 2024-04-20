'use server';
import fsPromises from 'fs/promises';
import path from 'path';

export async function getReports() {
	// Get the path of the json file
	const filePath = path.join(process.cwd(), 'lib/data.json');
	// Read the json file
	const jsonData = await fsPromises.readFile(filePath);
	// Convert buffer to string
	const jsonString = jsonData.toString();
	// Parse data as json
	const objectData = JSON.parse(jsonString);

	return objectData;
}
