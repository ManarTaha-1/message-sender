import InstitutionPage from "../pages/InstitutionPage.tsx";
import { createFileRoute } from "@tanstack/react-router"
export const Route = createFileRoute('/institutions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <InstitutionPage />
}
