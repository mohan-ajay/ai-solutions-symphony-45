import {  BauhausCard } from "@/ui/bauhaus-card";
import reflect_metricTalks from '../../public/reflect_metricTalks_2.jpg';

export const IMAGES = {
  reportIcon: '/public/reflect_metricTalks_2.jpg',
  financialDoc: '/images/financial-doc.jpg',
};
export default function DemoPage() {
  
  return (
    <div className="w-full p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <BauhausCard
    id="1"
    accentColor="#156ef6"
    backgroundColor="var(--bauhaus-card-bg)"
    separatorColor="var(--bauhaus-card-separator)"
    borderRadius="2em"
    borderWidth="2px"
    topInscription="Uploaded on 12/31/2024"
    mainText="Financial Report.zip"
    subMainText="Downloading File..."
    progressBarInscription="Progress:"
    progress={75.98}
    progressValue="75.98%"
    filledButtonInscription="Share"
    outlinedButtonInscription="Bookmark"
    onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
    onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
    onMoreOptionsClick={(id) => console.log(`More options dots clicked for ID: ${id}`)}
  />
</div>
  );
}