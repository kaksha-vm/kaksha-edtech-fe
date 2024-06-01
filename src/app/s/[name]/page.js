import CLink from "@/common/components/link";

export default async function Subject({ params }) {
  const moduleDetailsResponse = await fetch(
    `http://localhost:3000/api/items/${params.name}`
  );
  const moduleDetails = await moduleDetailsResponse.json();

  return (
    <div>
      <h1>Module Name: {moduleDetails?.name?.toUpperCase()}</h1>
      <h3>Module Details</h3>
      <div>{moduleDetails.description}</div>
      <CLink label="Goto Home" href={"/"} />
    </div>
  );
}
