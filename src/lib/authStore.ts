import { writable } from 'svelte/store';
import type { Applicant } from '.prisma/client';

const userKey = "jobz_local_storage_user"

export const user = writable<Applicant | null>()

export function login(applicant: Applicant) {
    user.set(applicant)
}

export function signin(applicant: Applicant) {
    user.set(applicant)
}