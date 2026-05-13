import { responsiveConfig as rc } from "../Config/responsiveConfig";
import ValueColumn from "./ValueColumn";
import { valueColumns } from "./valueSectionData";

export default function ValueSectionPage() {
  return (
    <section className={rc.standardSection}>
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 lg:grid-cols-2">
        {valueColumns.map((column) => (
          <ValueColumn key={column.id} paragraphs={column.paragraphs} />
        ))}
      </div>
    </section>
  );
}