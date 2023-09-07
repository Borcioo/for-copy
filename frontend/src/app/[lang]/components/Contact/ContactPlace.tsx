interface Place {
    data: {
        id: number;
        email: string
        placeName: string;
        placeAddress: string;
        phoneNumber: string;
        openDays: string;
        openHours: string;
    }
}

function renderContent({data}: Place) {
    return (
        <div className="w-[190px]">
            <p className="font-bold">{data.placeName}</p>
            <p className="mt-2 mb-6">{data.placeAddress}</p>
            {(data.openHours && data.openDays) && (
                <div className="mb-2">
                    <p>{data.openDays}</p>
                    <p>{data.openHours}</p>
                </div>
            )}
            <div className="flex flex-row gap-1">
                <p className="text-[#F00000]">mail.</p>
                <p>{data.email}</p>
            </div>
            <div className="flex flex-row gap-1">
                <p className="text-[#F00000]">tel.</p>
                <p>{data.phoneNumber}</p>
            </div>
        </div>
    )

}

export default function ContactPlace({data}: Place) {
    return (
        <div className="w-[190px]">
            {renderContent({data})}
        </div>
    )
}
