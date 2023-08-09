import { json } from "@sveltejs/kit";

export function GET(){

	const number = 6;

	return json(number);

}
