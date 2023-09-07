import {ContactData} from "@/app/[lang]/components/Footer/Footer";

export default function FooterContact({contactData,contactTitle}:{contactData:Array<ContactData>,contactTitle:string|null}){

    const renderContactContent=(contactData:Array<ContactData>)=>{
        return contactData.map(item=>(
            <div className="flex w-[235px] flex-col items-end" key={item.email}>
                <p className="w-full flex justify-start font-bold pb-2">{item.place}</p>
                <div className="w-[78%] flex flex-col">
                    {item.phoneNumber&&(
                        <div className="flex flex-row gap-1">
                            <p className="text-[#F00000]">tel.</p>
                            <p className="underline lg:no-underline">{item.phoneNumber}</p>
                        </div>
                    )}
                    {item.phoneNumberSecondary&&(
                        <div className="flex flex-row gap-1">
                            <p className="text-[#F00000]">tel.</p>
                            <p className="underline lg:no-underline">{item.phoneNumberSecondary}</p>
                        </div>
                    )}
                    {item.email&&(
                        <div className="flex flex-row gap-1">
                            <p className="text-[#F00000]">mail:</p>
                            <p>{item.email}</p>
                        </div>
                    )}
                </div>
            </div>
        ))

    }

    return(
        <div className="flex flex-col gap-8">
            <p className="hidden lg:visible text-[16px] font-bold">{contactTitle&&(contactTitle)}</p>
            <div className="flex flex-col gap-[28px]">
                {renderContactContent(contactData)}
            </div>
        </div>
    )
}