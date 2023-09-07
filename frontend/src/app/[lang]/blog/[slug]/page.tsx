import BlogActiveView from "@/app/[lang]/components/Blog/BlogActiveView";
import { PageProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";

export default function Page({ params }: PageProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <BlogActiveView params={params} />
    </div>
  );
}
