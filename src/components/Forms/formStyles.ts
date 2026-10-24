
export type FieldVariant = "light" | "dark";

const base = {
  light: {
    field:
      "w-full rounded-[10px] border bg-ivory text-sm text-dark outline-none transition placeholder:text-muted focus:ring-2 focus:ring-dark/10",
    border: "border-line-strong focus:border-dark",
    placeholder: "text-muted",
    label: "block text-xs font-semibold leading-4 text-dark",
    icon: "text-muted",
    menu: "border-line bg-white",
    option: "text-dark",
    optionActive: "bg-tertiary text-dark",
    optionSelected: "font-semibold text-dark",
  },
  dark: {
    field:
      "w-full rounded-[10px] border bg-navy-deep text-sm text-white outline-none transition [color-scheme:dark] placeholder:text-muted focus:ring-2 focus:ring-white/10",
    border: "border-white/10 focus:border-white/40",
    placeholder: "text-muted",
    label: "block text-xs font-semibold leading-4 text-ivory/70",
    icon: "text-ivory/70",
    menu: "border-white/10 bg-dark",
    option: "text-ivory/80",
    optionActive: "bg-white/10 text-white",
    optionSelected: "font-semibold text-white",
  },
};

const errorBorder = "border-error focus:border-error";

export const inputClass = (variant: FieldVariant = "light", hasError = false) =>
  `${base[variant].field} h-12 px-4 ${hasError ? errorBorder : base[variant].border}`;

export const textareaClass = (variant: FieldVariant = "light", hasError = false) =>
  `${base[variant].field} min-h-28 resize-y p-4 leading-6 ${hasError ? errorBorder : base[variant].border}`;

export const labelClass = (variant: FieldVariant = "light") => base[variant].label;

export const errorTextClass = "text-[11px] text-error";

export const fieldTheme = (variant: FieldVariant = "light") => base[variant];

export const submitButtonClass = (colorClassName: string) =>
  `h-12 w-full rounded-xl px-6 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 ${colorClassName}`;

export const darkSubmit = "bg-dark hover:bg-navy-deep focus-visible:outline-dark";
export const accentSubmit = "bg-accent hover:bg-[#866841] focus-visible:outline-accent";
