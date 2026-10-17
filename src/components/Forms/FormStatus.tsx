import { FieldVariant } from "./formStyles";

interface FormStatusProps {
  status: "idle" | "submitting" | "success" | "error";
  error: string;
  variant?: FieldVariant;
}

// Success / error line shown under every form's submit button.
const FormStatus: React.FC<FormStatusProps> = ({ status, error, variant = "light" }) => {
  if (status === "success") {
    return (
      <p role="status" className={`text-sm ${variant === "dark" ? "text-emerald-400" : "text-emerald-700"}`}>
        Thank you! Your enquiry has been sent — our team will contact you shortly.
      </p>
    );
  }

  if (status === "error") {
    return (
      <p role="alert" className="text-sm text-error">
        {error}
      </p>
    );
  }

  return null;
};

export default FormStatus;
