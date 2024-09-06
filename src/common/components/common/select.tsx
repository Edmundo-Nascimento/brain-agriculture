import { useField } from 'formik';
import { CSSProperties } from 'react'
import Select from 'react-select';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export interface FlavourOption {
  readonly value: string;
  readonly label: string;
  readonly rating: string;
}

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
    padding: '2px 12px',
    border: state.isFocused ? '1px solid #4F46E5' : '1px solid #D1D5DB', // Substitua com suas cores Tailwind
    borderRadius: '0.375rem', // rounded-md
    boxShadow: state.isFocused ? '0 0 0 1px rgba(79, 70, 229, 0.5)' : 'none', // shadow-sm
    outline: 'none',
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 9999, // Ajuste conforme necessário para garantir que o menu esteja visível sobre outros elementos
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: '8px 12px',
    backgroundColor: state.isSelected ? '#E5E7EB' : 'white', // Ajuste com cores Tailwind se necessário
    color: 'black',
    '&:hover': {
      backgroundColor: '#F3F4F6', // Ajuste com cores Tailwind se necessário
    },
  }),
};

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly ColourOption[] | readonly FlavourOption[];
}

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles: CSSProperties = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};
const formatGroupLabel = (data: any) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);


export function SelectGroupCustomComponent({ options, label, id, errors, name, isMulti = false, ...props }: any) {
  const [field, helpers]: any = useField(name);

  const handleChange = (option: any) => {
    console.log('Selected option:', option); // Aqui você pode ver o valor selecionado
    helpers.setValue(option)
  };

  return (
    <div className="mb-4 w-full">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

      <Select<any | any, false, any>
        formatGroupLabel={formatGroupLabel}
        options={options}
        styles={customStyles}
        className={`react-select-container`}
        onChange={handleChange}
        value={field.value}
        isMulti={isMulti}
      />
      {errors[name] && <span className="text-red-500 text-sm mt-1">{errors[name]}</span>}
    </div>
  )
}

export default function SelectCustomComponent({ options, label, id, errors, name, ...props }: any) {
  const [field, helpers]: any = useField(name);

  const handleChange = (option: any) => {
    console.log('Selected option:', option); // Aqui você pode ver o valor selecionado
    helpers.setValue(option)
  };

  return (
    <div className="mb-4 w-full">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <Select
        options={options}
        styles={customStyles}
        className={`react-select-container`}
        onChange={handleChange}
        value={field.value}
      />
      {errors[name] && <span className="text-red-500 text-sm mt-1">{errors[name]}</span>}
    </div>
  )
}
