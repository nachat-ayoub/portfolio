import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { getProjectById, getProjects } from './data/services';
import TestCardAnimation from './components/TestCardAnimation';
import CreateProjectPage from './components/CreateProjectPage';
import CVPage from './pages/CVPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/cv',
      element: <CVPage />,
    },
    {
      path: '/projects/:projectId',
      element: <ProjectPage />,
      loader: ({ params }: any) => {
        const project = getProjectById(parseInt(params.projectId));
        return { project };
      },
    },
    {
      path: '/projects/create',
      element: <CreateProjectPage />,
      loader: () => {
        const projectData = getProjects();
        return projectData;
      },
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
