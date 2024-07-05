export const Home = () => "/";

export const location = (id: string) => `/${id}`;

export const dataVisualization = (id: string) =>
  location(id) + "/data-visualization";

const routes = {
  Home,
  location,
  dataVisualization,
};

export default routes;
