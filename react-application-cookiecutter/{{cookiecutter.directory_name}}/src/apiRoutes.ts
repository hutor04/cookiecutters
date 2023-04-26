export const BASE_API = process.env.REACT_APP_BASE_API || "";

const apiRoutes = {
  person: (personId: string): string => `${BASE_API}/persons/${personId}`,
};

export default apiRoutes;
