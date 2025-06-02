import { createFileRoute } from '@tanstack/react-router';
import ImagesPage from '../pages/ImagesPage';

export const Route = createFileRoute('/images')({
  component: ImagesPage, 
});