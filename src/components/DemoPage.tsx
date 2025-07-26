import { SimpleCard } from "@/ui/simple-card";
export const IMAGES = {
  reportIcon: '/reflect_metricTalks_2.jpg',
  financialDoc: '/financial-doc.jpg',
};
export default function DemoPage() {
  
  return (
    <div className="w-full p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <SimpleCard
    id="1"
    accentColor="#156ef6"
    mainText="Financial Report.zip"
    subMainText="Downloading File..."
    progress={75.98}
    progressValue="75.98%"
    filledButtonInscription="Share"
    outlinedButtonInscription="Bookmark"
    onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
    onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
  />
</div>
  );
}