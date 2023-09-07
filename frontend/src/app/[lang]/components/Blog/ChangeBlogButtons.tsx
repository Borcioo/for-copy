import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import { PageProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";
import { BlogActiveViewProps } from "@/app/[lang]/components/Blog/BlogActiveView";
import { useRouter } from "next/navigation";

export default function ChangeBlogButtons({
  data,
  params,
}: {
  data: ButtonProp[];
  params: string;
}) {
  const [prevData, setPrevData] = useState<BlogActiveViewProps | null>(null);
  const [nextData, setNextData] = useState<BlogActiveViewProps | null>(null);
  const router = useRouter();
  const buttonClass = () => {
    if (prevData && nextData) {
      return "max-w-[1134px] w-full flex flex-row md:font-bold text-[14px] mt-[94px] justify-between px-[24px]";
    } else if (prevData && !nextData) {
      return "max-w-[1134px] w-full flex font-bold text-[14px] mt-[94px] items-start justify-start px-[24px]";
    } else if (!prevData && nextData) {
      return "max-w-[1134px] w-full flex font-bold text-[14px] mt-[94px] items-end justify-end px-[24px]";
    } else {
      return "hidden";
    }
  };

  const prevId = String(parseInt(params) - 1);
  const nextId = String(parseInt(params) - 1);

  const fetchDataPrev = useCallback(async () => {
    try {
      const prevId = String(parseInt(params) - 1);
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/blog-articles/${prevId}`;
      const urlParamsObject = {
        populate: "",
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      setPrevData(responseData.data.attributes);
    } catch (error) {
    } finally {
    }
  }, []);

  const fetchDataNext = useCallback(async () => {
    try {
      const nextId = String(parseInt(params) - 1);
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/blog-articles/${nextId}`;
      const urlParamsObject = {
        populate: "",
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      setNextData(responseData.data.attributes);
    } catch (error) {
    } finally {
    }
  }, []);

  useEffect(() => {
    fetchDataPrev();
    fetchDataNext();
  }, []);
  return (
    <div className={buttonClass()}>
      {prevData && (
        <button
          onClick={() => {
            router.push(`blog/${prevId}`);
          }}
          className="flex flex-row gap-[10px] md:gap-[22px] items-center justify-center"
        >
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0L5.33333 0V2.6L8 2.6V0Z" fill="black" />
            <path
              d="M5.33333 2.6H2.66667L2.66667 5.2L5.33333 5.2V2.6Z"
              fill="black"
            />
            <path d="M2.66667 5.2H0V7.8H2.66667V5.2Z" fill="black" />
            <path
              d="M5.33333 7.8L2.66667 7.8V10.4H5.33333L5.33333 7.8Z"
              fill="black"
            />
            <path d="M8 10.4H5.33333V13H8V10.4Z" fill="black" />
          </svg>
          {data[0].text}
        </button>
      )}
      {nextData && (
        <button
          onClick={() => {
            router.push(`blog/${nextId}`);
          }}
          className="flex flex-row gap-[10px] md:gap-[22px] items-center justify-center"
        >
          {data[1].text}
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H2.66667V2.6H0V0Z" fill="black" />
            <path d="M2.66667 2.6H5.33333V5.2H2.66667V2.6Z" fill="black" />
            <path d="M5.33333 5.2H8V7.8H5.33333V5.2Z" fill="black" />
            <path d="M2.66667 7.8H5.33333V10.4H2.66667V7.8Z" fill="black" />
            <path d="M0 10.4H2.66667V13H0V10.4Z" fill="black" />
          </svg>
        </button>
      )}
    </div>
  );
}
