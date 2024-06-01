export async function GET(request, { params }) {
  // console.log("The request params are: ", params);
  // console.log("The request headers are: ", request.headers);
  return Response.json({
    name: params?.name,
    description: `${params?.name?.toUpperCase()} configurable marketing content`,
  });
}
