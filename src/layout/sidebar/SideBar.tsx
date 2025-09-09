"use client";

import TableIcon from "@/components/icons/TableIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import StarIcon from "@/components/icons/StarIcon";
import SquaresPlusIcon from "@/components/icons/SquaresPlusIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import NavBarLink from "@/components/ui/NavBarLink";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { fr } from "date-fns/locale";

function Sidebar() {
  const [date, setDate] = useState<Date | undefined>();
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <div className=" flex flex-col gap-12 p-8 md:p-16 ">
      <ul className="flex flex-col gap-12">
        {/* <li className="flex items-center gap-6">
          <NavBarLink href="/" label="Home" icon={HomeIcon} />
        </li> */}
        <li className="flex items-center gap-6">
          <NavBarLink href="/boards" label="Boards" icon={TableIcon} />
        </li>
        <li className="flex items-center gap-6">
          <NavBarLink href="/starred" label="Starred" icon={StarIcon} />
        </li>
        <li className="flex items-center gap-6">
          <NavBarLink href="/recent" label="Recent" icon={ClockIcon} />
        </li>
      </ul>
      {/* <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" locale={fr} /> */}
    </div>
  );
}

export default Sidebar;
