import excels from "../data/excel";
import ExcelCard from "./ExcelCard";
function Excels() {
  return (
    <div className="container">
      <p className="title is-size-3 is-family-monospace has-text-centered mt-6">
        Project Management
      </p>
      <hr />
      <div className="columns is-multiline">
        {excels.length > 0 &&
          excels.map((excel, index) => (
            <div className="column is-one-third">
              <ExcelCard
                key={index}
                title={excel.title}
                image={excel.image}
                description={excel.describtion}
                techsUsed={excel.techsUsed}
                viewlink={excel.viewLink}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Excels;
