import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { getProjectById } from './data/services';
import TestCardAnimation from './components/TestCardAnimation';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/test',
      element: <TestCardAnimation />,
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
