import { PageProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import ServiceActiveView from "@/app/[lang]/components/Services/ServiceActiveView";

export default function Page({ params }: PageProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <ServiceActiveView params={params} />
    </div>
  );
}
