"use client";
import Header from "@/app/[lang]/components/Reusable/Components/Heading/Header";
import ContactEmployee from "@/app/[lang]/components/Contact/ContactEmployee";
import ContactPlace from "@/app/[lang]/components/Contact/ContactPlace";
import ContactSocials from "@/app/[lang]/components/Contact/ContactSocials";
import { ContactForm } from "@/app/[lang]/components/Contact/ContactForm";
import { HeaderProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { renderSection } from "@/app/[lang]/utils/custom-section-renderer";

interface pageDataProps {
  slug: string;
  contentSections: any;
}

interface ContactHeaderProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  from: string;
  to: string;
}

export interface ContactEmployeeProps {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  role: string;
  avatar: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        url: string;
      };
    };
  };
}

interface ContactPlaceProps {
  id: number;
  email: string;
  placeName: string;
  placeAddress: string;
  phoneNumber: string;
  openDays: string;
  openHours: string;
}

interface ContactDataProps {
  contacts: ContactEmployeeProps[];
  places: ContactPlaceProps[];
}

interface ContactFormProps {
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  fileLabel: string;
  termsText: string;
  buttonText: string;
}

export default function ContactLayout({
  attributes,
}: {
  attributes: pageDataProps;
}) {
  const headerData: HeaderProps = renderSection(attributes, "sections.header");
  const contactData: ContactDataProps = renderSection(
    attributes,
    "sections.contact-group",
  );
  const contactForm: ContactFormProps = renderSection(
    attributes,
    "sections.contact-form",
  );
  return (
    <div className="flex justify-center items-center flex-col w-full mb-[102px]">
      {headerData && <Header data={headerData} />}
      <div className="flex justify-center items-center xl:items-end flex-col xl:flex-row lg:gap-20 w-full">
        <div className="flex flex-col max-w-full h-full ">
          {contactData.contacts.length > 0 && (
            <div className="flex flex-wrap px-8 sm:px-0 flex-row gap-8 sm:gap-[68px] justify-center">
              {contactData.contacts.map((item) => (
                <ContactEmployee key={item.id} data={item} />
              ))}
            </div>
          )}
          {contactData.places.length > 0 && (
            <div className="hidden xl:block">
              <div className="flex flex-col  sm:px-0 sm:flex-row max-w-[515px] w-full mt-[58px] gap-[68px] sm:justify-between">
                {contactData.places.map((item) => (
                  <ContactPlace key={item.id} data={item} />
                ))}
              </div>
              <ContactSocials />
            </div>
          )}
        </div>
        {contactForm && <ContactForm data={contactForm} />}
        {contactData.places.length > 0 && (
          <div className="block xl:hidden">
            <div className="flex flex-col  sm:px-0 sm:flex-row max-w-[515px] w-full mt-[58px] gap-[68px] sm:justify-between">
              {contactData.places.map((item) => (
                <ContactPlace key={item.id} data={item} />
              ))}
            </div>
            <ContactSocials />
          </div>
        )}
      </div>
    </div>
  );
}
