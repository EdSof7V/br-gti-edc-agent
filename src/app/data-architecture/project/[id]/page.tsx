import ProjectDetailsPage from "@/features/data-architecture/components/ProjectDetailsPage";

export default function ProjectPage({ params }: { params: { id: string } }) {
    return <ProjectDetailsPage projectId={params.id} />;
} 