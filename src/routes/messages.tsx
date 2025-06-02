import { createFileRoute } from '@tanstack/react-router';
import MessagePage from '../pages/MessagePage';

export const Route = createFileRoute('/messages')({
  component: MessagePage, 
});
