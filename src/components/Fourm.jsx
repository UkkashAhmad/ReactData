import { Formik, Form, Field } from "formik";


const FormComponent = () => {
  return (
  
  <>
              <h1 className="text-3xl font-bold text-center mb-6">Welcome To ISDP University</h1>
    <div className="container mx-auto p-4 mt-8 border border-gray-200">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          fatherName: "",
          gender: "",
          phoneNumber: "",
          className: "",
          college: "",
          email: "",
          fatherNumber: "",
          address: "",
          admissionDate: "",
          admissionFee: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <Field
                name="firstName"
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <Field
                name="lastName"
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Father Name
              </label>
              <Field
                name="fatherName"
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Field
                type="number"
                name="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Class For Admission
              </label>
              <Field
                name="className"
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Priveous College
              </label>
              <Field
                name="college"
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Father Phone
              </label>
              <Field
                type="number"
                name="fatherNumber"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Admission Date
              </label>
              <Field
                name="admissionDate"
                type="date"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Admission Fee
              </label>
              <Field
                name="admissionFee"
                type="number"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <div className="form-group mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <div className="radio-group">
              <label className="inline-flex items-center">
                <Field
                  type="radio"
                  value="male"
                  name="gender"
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <Field
                  type="radio"
                  value="female"
                  name="gender"
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          <div className="form-group mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <Field
              name="address"
              as="select"
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="Multan">Multan</option>
              <option value="Lahore">Lahore</option>
              <option value="Bahawalpur">Bahawalpur</option>
              <option value="Rawalpindi">Rawalpindi</option>
            </Field>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
    </>
    );
};

export default FormComponent;
