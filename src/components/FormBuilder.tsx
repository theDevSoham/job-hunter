import React, { useState } from "react";
import defaultCoverText from "../assets/defaultCoverLetter.txt?raw";
import defaultEmailText from "../assets/defaultEmailTemplate.txt?raw";
import defaultLinkedinText from "../assets/defultLinkedInDM.txt?raw";
import FormBody from "./FormBody";

const selectedTab = `bg-blue-700 text-white`;
const defaultTab = `bg-gray-300 text-black`;

const TabsList: {
  key: "cover" | "linkedindm" | "email_template";
  label: string;
}[] = [
  {
    key: "cover",
    label: "Cover Letter",
  },
  {
    key: "linkedindm",
    label: "Linkedin DM",
  },
  {
    key: "email_template",
    label: "Cold Email",
  },
];

const FormBuilder = () => {
  const [current, setCurrent] = useState<
    "cover" | "linkedindm" | "email_template"
  >("cover");

  const renderForm = (): React.ReactNode => {
    let result: React.ReactNode = <></>;
    switch (current) {
      case "cover":
        result = (
          <FormBody
            type="cover"
            heading="Cover Letter"
            textData={defaultCoverText}
          />
        );
        break;

      case "email_template":
        result = (
          <FormBody
            type="email_template"
            heading="Cold Email Template"
            textData={defaultEmailText}
          />
        );
        break;

      case "linkedindm":
        result = (
          <FormBody
            type="linkedindm"
            heading="Linkedin DM Message"
            textData={defaultLinkedinText}
          />
        );
        break;

      default:
        break;
    }

    return result;
  };

  return (
    <div className="w-full max-w-4x h-full p-6" id="form-builder-index">
      <div className="md:flex h-full">
        <ul className="w-full md:w-[300px] flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
          {TabsList.map((item) => (
            <li key={item.key}>
              <a
                href="#"
                className={`inline-flex items-center px-4 py-3 ${
                  current === item.key ? selectedTab : defaultTab
                } rounded-lg active w-full`}
                aria-current="page"
                onClick={() => setCurrent(item.key)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 bg-gray-300 rounded-lg w-full h-full">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
