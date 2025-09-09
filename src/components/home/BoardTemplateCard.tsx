import Image from "next/image";

type TemplateImage = "abstractForms.png" | "neonCircles.png" | "pastelPlanet.png";

interface BoardTemplateCardProps {
  templateImage: TemplateImage;
  title: string;
}

function BoardTemplateCard({ templateImage, title }: BoardTemplateCardProps) {
  return (
    <div className="w-96 bg-white shadow-md rounded-lg cursor-pointer overflow-hidden">
      <div className="relative w-full h-40 md:h-48 overflow-hidden rounded-t-lg">
        <Image src={`/${templateImage}`} alt="Board Image" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h2 className="text-white font-bold drop-shadow-lg">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default BoardTemplateCard;
