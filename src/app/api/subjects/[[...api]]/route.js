export async function GET(request, { params }) {
  console.log("The request params are: ", params);
  // console.log("The request headers are: ", request.headers);

  try {
    console.log("----fetching subject----");
    const subjectsResponse = await fetch("http://localhost:8080/subjects");
    console.log("----subjectsResponse----", subjectsResponse);
    const subjects = await subjectsResponse.json();
    console.log("----subjects----", subjects);
    return Response.json({
      data: subjects,
    });
  } catch (error) {
    return Response.json({
      error: "error",
    });
  }
}
