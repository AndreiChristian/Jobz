import { writable } from 'svelte/store';
// import { get, set } from './server/localStorage';
import type { Applicant } from '.prisma/client';



const userKey = "jobz_local_storage_user"

export const user = writable<Applicant | null>()

export function login(applicant: Applicant) {
    // set<Applicant>(userKey, applicant)
    user.set(applicant)
}

export function signin(applicant: Applicant) {
    // set<Applicant>(userKey, applicant)
    user.set(applicant)
}