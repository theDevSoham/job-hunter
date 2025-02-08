import { useState } from "react";

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
          <h3 className="text-lg font-bold text-gray-900 mb-2">Profile Tab</h3>
          <p className="mb-2">
            This is some placeholder content the Profile tab's associated
            content, clicking another tab will toggle the visibility of this one
            for the next.
          </p>
          <p>
            The tab JavaScript swaps classNamees to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
