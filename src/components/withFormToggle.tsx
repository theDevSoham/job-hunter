import React, { useState } from "react";

// A simple template form that only contains a textarea input for a template.
const TemplateForm = () => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Template Form</h3>
      <form>
        <div className="mb-4">
          <textarea
            name="template"
            placeholder="Enter your template here..."
            rows={10}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
        >
          Submit Template
        </button>
      </form>
    </div>
  );
};

// Higher Order Component that adds a toggle switch to display either the wrapped component or the TemplateForm.
const withFormToggle = (WrappedComponent: React.FC<any>) => {
  return (props: any) => {
    const [showTemplate, setShowTemplate] = useState(false);

    const handleToggle = () => {
      setShowTemplate((prev) => !prev);
    };

    return (
      <div className="max-w-2xl mx-auto">
        {/* Toggle switch */}
        <div className="mb-4 flex items-center">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={showTemplate}
              onChange={handleToggle}
            />
            <span className="ml-2 text-gray-700">Use Template Form</span>
          </label>
        </div>

        {/* Conditionally render the TemplateForm or the original component */}
        {showTemplate ? <TemplateForm /> : <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default withFormToggle;
