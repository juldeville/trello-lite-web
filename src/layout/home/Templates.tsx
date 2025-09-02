import BoardTemplateCard from "@/components/home/BoardTemplateCard";

function Templates() {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-2xl font-bold">Templates</h2>
      <div className="flex gap-6 flex-wrap  ">
        <BoardTemplateCard templateImage="abstractForms.png" title="Minimalist" />
        <BoardTemplateCard templateImage="neonCircles.png" title="Abstract" />
        <BoardTemplateCard templateImage="pastelPlanet.png" title="Modern" />
      </div>
    </div>
  );
}
export default Templates;
