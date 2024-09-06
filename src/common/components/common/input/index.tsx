import { InputMask } from "@react-input/mask";
import { useField } from "formik";
import { ComponentProps } from "react"

type InputProps = ComponentProps<"input"> & {
  label: string;
  name: string;
  errors: any;
  handleChange?: any
}

export function HectaresInput({ label, errors, name, ...props }: InputProps) {
  const [field, helpers]: any = useField(name);

  return (
    <div className="mb-4 w-full">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <InputMask
        {...field}
        {...props}
        inputMode="numeric"
        onChange={(e) => {
          field.onChange(e);
          helpers.setValue(e.target.value);
        }}
        onBlur={field.onBlur}
        value={field.value}
        mask="99999[.9999]"
        placeholder="Ex: 12345.6789"
        replacement={{ _: /\d/ }}
        className={`w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
      />
      {errors[name] && <span className="text-red-500 text-sm mt-1">{errors[name]}</span>}
    </div>
  );
};

export default function Input({ label, errors, name, ...props }: InputProps) {
  const [field]: any = useField(name);

  return (
    <div className="mb-4 w-full">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        {...field}
        {...props}
        className={`w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
      />
      {errors[name] && <span className="text-red-500 text-sm mt-1">{errors[name]}</span>}
    </div>
  )
}

export function InputMaskComponent({ label, errors, name, ...props }: InputProps) {
  const [field, helpers]: any = useField(name);

  function defineMask(value: string) {
    return value && value.length <= 14 ? "___.___.___-__" : "__.___.___/____-__"
  }

  return (
    <div className="w-full">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <InputMask
        {...field}
        {...props}
        inputMode="numeric"
        onChange={(e) => {
          field.onChange(e);
          helpers.setValue(e.target.value);
        }}
        onBlur={field.onBlur}
        value={field.value}
        mask={defineMask(field.value)}
        replacement={{ _: /\d/ }}
        className={`w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
      />
      {errors[name] && <span className="text-red-500 text-sm mt-1">{errors[name]}</span>}
    </div>
  )
}