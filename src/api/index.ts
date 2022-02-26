// fetcher functions for React Query

const SERVER_URL =
  process.env.REACT_APP_SERVER_BASE_URL || "http://localhost:4000/";

export async function fetchCollaboration() {
  return fetch(`${SERVER_URL}collaboration`).then((response) =>
    response.json()
  );
}

export async function fetchAdvisory() {
  return fetch(`${SERVER_URL}advisory`).then((response) => response.json());
}

export async function fetchPublications() {
  return fetch(`${SERVER_URL}publications`).then((response) => response.json());
}

export async function fetchNews() {
  return fetch(`${SERVER_URL}news`).then((response) => response.json());
}

export async function fetchInvestors() {
  return fetch(`${SERVER_URL}investors`).then((response) => response.json());
}

export async function fetchPartners() {
  return fetch(`${SERVER_URL}partners`).then((response) => response.json());
}

export async function fetchVideo() {
  return fetch(`${SERVER_URL}video`).then((response) => response.json());
}

export async function fetchPhoto() {
  return fetch(`${SERVER_URL}photo`).then((response) => response.json());
}

export async function fetchMembers() {
  return fetch(`${SERVER_URL}members`).then((response) => response.json());
}
