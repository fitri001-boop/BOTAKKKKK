export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="p-10">
      <title className="text-2xl font-bold">Hhah</title>
      <p>DemoID dari URL: <span className="text-blue-500">{id}</span></p>
    </div>
  );
}
