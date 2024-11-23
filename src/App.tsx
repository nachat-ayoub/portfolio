import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { getProjectById, getProjects } from './data/services';
import CreateProjectPage from './components/CreateProjectPage';
import CVPage from './pages/CVPage';

function App() {
  const path_prefix = '/portfolio';
  const router = createBrowserRouter([
    {
      path:  path_prefix,
      element: <HomePage />,
    },
    {
      path: path_prefix + '/cv',
      element: <CVPage />,
    },
    {
      path: path_prefix + '/projects/:projectId',
      element: <ProjectPage />,
      loader: ({ params }: any) => {
        const project = getProjectById(parseInt(params.projectId));
        return { project };
      },
    },
    {
      path: path_prefix + '/projects/create',
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
