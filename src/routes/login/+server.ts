import { login } from "$lib/authStore"
import prisma from "$lib/server/prisma.js";
import type { Applicant } from '@prisma/client';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {

    try {

        const applicant: Applicant = await prisma.applicant.create({
            data: {
                firstName: "Andrei Christian",
                lastName: "Netoiu",
                email: "andreichristiannetoiu@gmail.com",
                phoneNumber: "0722576199"
            }
        })

        // login(applicant)

        return json(applicant)

    } catch (err) {

        return json({ ok: false })

    }


}