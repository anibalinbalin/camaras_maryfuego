import HouseDetail from "@/components/pages/HouseDetail"

export default async function HouseDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params
  return <HouseDetail id={id} />
}
