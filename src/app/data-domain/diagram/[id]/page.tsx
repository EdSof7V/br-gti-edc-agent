import DiagramDetailsPage from "@/features/data-domain/components/DiagramDetailsPage";

export default async function DiagramPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <DiagramDetailsPage diagramId={id} />;
} 