import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { getProjectById } from './data/services';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/projects/:projectId',
      element: <ProjectPage />,
      loader: ({ params }: any) => {
        const project = getProjectById(parseInt(params.projectId));
        return { project };
      },
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
