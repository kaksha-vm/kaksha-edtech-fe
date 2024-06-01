import CLink from "@/common/components/link";

export default function Subjects({ subjects }) {
  return (
    <>
      <div style={{ display: "flex" }}>
        {subjects.map((subject) => {
          return (
            <div
              key={subject._id}
              style={{
                margin: "20px",
                padding: "10px",
                border: "1px solid black",
              }}
            >
              <h1>{subject.name}</h1>
              <h4>{subject.description}</h4>
              <CLink
                label="Start Learning"
                href={`/s/${subject.name.toLowerCase()}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
