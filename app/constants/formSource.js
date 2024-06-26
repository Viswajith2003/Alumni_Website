export const userInputs = [
  {
    id: "firstname",
    label: "Firstname",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: "lastname",
    label: "Lastname",
    type: "text",
    placeholder: "Last Name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Phone",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
  },
  {
    id: "repeatPassword",
    label: "Repeat Password",
    type: "password",
    placeholder: "Repeat Password",
  },
  {
    id: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    placeholder: "Date of Birth",
  },
  {
    id: "gender",
    label: "Gender",
    type: "select",
    options: [
      { value: "", label: "Select Gender" },
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "course",
    label: "Course Graduated",
    type: "select",
    options: [
      { value: "", label: "Select Course" },
      { value: "cse", label: "Computer Science Engineering" },
      { value: "me", label: "Mechanical Engineering" },
      { value: "ce", label: "Civil Engineering" },
      { value: "eee", label: "Electrical Electronics Engineering" },
      { value: "ece", label: "Electronics Communication Engineering" },
      { value: "it", label: "Information Technology" },
    ],
  },
  {
    id: "batch",
    label: "Batch",
    type: "number",
    placeholder: "Batch",
  },
  {
    id: "connectedTo",
    label: "Connected To",
    type: "textarea",
    placeholder: "Current Position",
  },
  {
    id: "address",
    label: "Address",
    type: "textarea",
    placeholder: "Address",
  },
];
