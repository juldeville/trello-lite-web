import Image from "next/image";
import Link from "next/link";
export default function LogoSection() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/" className="contents">
        <Image src="/trello-logo.png" alt="Logo" width={80} height={80} />
        <p className="text-2xl font-bold">
          Trello <br /> Lite
        </p>
      </Link>
    </div>
  );
}
