import { useEffect, useState } from "react";
import {
  constructOutput,
  formatData,
  pairElements,
  transformString,
} from "../utils";
import withFormToggle from "./withFormToggle";

interface IFormBody {
  type: "cover" | "linkedindm" | "email_template";
  heading: string;
  textData: string;
  onSubmit: (replacedText: string) => void;
}

const FormBody: React.FC<IFormBody> = ({
  type = "cover",
  heading = "Cover Letter",
  textData = "",
}) => {
  const [formKeys, setFormKeys] = useState<string[][]>();
  const [showOutput, setShowOutput] = useState<boolean>(false);
  const [output, setOutput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    setShowOutput(true);

    setOutput(constructOutput(formObject, textData));
  };

  useEffect(() => {
    // fetchDefaultData().then(console.log).catch(console.log);
    setFormKeys(pairElements([...formatData(textData)]));
  }, [textData]);

  useEffect(() => {
    console.log(formKeys);
  }, [formKeys]);

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{heading}</h3>
      {showOutput ? (
        <div className="overflow-auto">
          <p>{output}</p>
        </div>
      ) : (
        <form className="overflow-auto" onSubmit={handleSubmit}>
          {formKeys?.map((rows, ind) => {
            return (
              <div className="grid md:grid-cols-2 md:gap-6" key={ind}>
                {rows.map((key, index) => (
                  <div
                    className="relative z-0 w-full mb-5 group"
                    key={`${key}_${index}`}
                  >
                    <input
                      type="text"
                      name={key}
                      id={key}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor={key}
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {transformString(key)}
                    </label>
                  </div>
                ))}
              </div>
            );
          })}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default withFormToggle(FormBody);
