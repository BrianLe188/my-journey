export default function HiveGrid({ blocks }: { blocks: number }) {
  return (
    <div className="grid-hive">
      {Array.from({ length: blocks }, (_v, i) => i).map((item) => (
        <div key={item} className="block-hive"></div>
      ))}
    </div>
  );
}
