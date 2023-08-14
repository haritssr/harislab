export default function CurrentStatus({
  currentStatus,
}: {
  currentStatus: string;
}) {
  return (
    <div className="">
      <p>Site is under development</p>
      <p>Current status: {currentStatus}</p>
      <ul className="block list-outside list-disc space-y-1 pl-4 mt-5">
        {allStatus.map((a) => (
          <li
            key={a}
            className={`${
              currentStatus === a
                ? "text-blue-600 font-semibold"
                : "text-zinc-500"
            }`}
          >
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

const allStatus = ["Not Started", "Ideation", "Design", "Development"];
