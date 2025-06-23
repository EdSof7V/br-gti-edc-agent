import ProjectDetailsPage from "@/features/data-architecture/components/ProjectDetailsPage";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ProjectDetailsPage projectId={id} />;
} 