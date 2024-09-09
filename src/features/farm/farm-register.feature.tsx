import { z } from "zod";
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Input, { HectaresInput, InputMaskComponent } from "../../common/components/common/input";
import { useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import SelectCustomComponent, { SelectGroupCustomComponent } from "../../common/components/common/select";
import { plantedCropsGroupedOptions } from "../../common/data/planted-crops";
import { addFarm, updateFarm } from './farm.slice';
import { brasilianStates } from "../../common/data/states";
import { IFarm } from "../../common/data/farms";
import { ChartColors } from "../dashboard/dashboard.feature";
import { useModal } from "../../context/modal-context";
import { useAppDispatch } from "../../app/store.app";


const cpfOrCnpjSchema = z
  .string({ message: "Campo obrigatório" })
  .refine((value) => validateCpfOrCnpj(value), {
    message: "CPF ou CNPJ inválido",
  });

const validateCpfOrCnpj = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  return isValidCPF(cleanedValue) || isValidCNPJ(cleanedValue);
};

const isValidCPF = (cpf: string) => {
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let sum, rest;
  sum = 0;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;
  return true;
};

const isValidCNPJ = (cnpj: string) => {
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  let length = cnpj.length - 2;
  let numbers: any = cnpj.substring(0, length);
  let digits = cnpj.substring(length);
  let sum = 0;
  let pos = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;
  length += 1;
  numbers = cnpj.substring(0, length);
  sum = 0;
  pos = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;
  return true;
};

interface FarmRegisterFeatureProps {
  farm?: IFarm
}
export default function FarmRegisterFeature({ farm }: FarmRegisterFeatureProps) {
  const formikRef = useRef(null);
  const [step, setStep] = useState(1);

  const { closeModal }: any = useModal();

  const StepOneSchema = z.object({
    farmOwn: z.string({ message: "Campo obrigatório" }),
    farmName: z.string({ message: "Campo obrigatório" }),
    document: cpfOrCnpjSchema,
    state: z.object({
      id: z.number(),
      label: z.string(),
      value: z.string(),
    }).refine((state) => state.id && state.label && state.value, {
      message: "O campo obrigatório",
    }),
    city: z.string({ message: "Campo obrigatório" }),
  });

  const StepTwoSchema = z.object({
    totalArea: z.number({ message: "Campo obrigatório" }),
    agriculturalArea: z.number({ message: "Campo obrigatório" }),
    vegetationArea: z.number({ message: "Campo obrigatório" }),
    plantedCrops: z.array(
      z.object({
        id: z.number(),
        label: z.string(),
        value: z.string(),
        type: z.string(),
      })
    ).min(1, { message: "É necessário selecionar pelo menos uma cultura plantada" }),
  }).refine((data) => {
    return !(data.totalArea < (data.agriculturalArea + data.vegetationArea))
  }, {
    message: "A soma da área agricultável e de vegetação não pode ser maior que a área total",
    path: ["totalArea"],
  });

  const dispatch = useAppDispatch();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values: Partial<IFarm>) => {
    if (farm) {
      dispatch(updateFarm({ id: farm?.id, payload: values }));
    } else {
      dispatch(addFarm(values));
    }
    closeModal();
  };

  return (

    <Formik
      innerRef={formikRef}
      initialValues={farm ? farm : {}}
      validationSchema={step === 1 ? toFormikValidationSchema(StepOneSchema) : toFormikValidationSchema(StepTwoSchema)}
      onSubmit={(values: Partial<IFarm>, actions) => {
        if (step === 2) {
          handleSubmit(values);
        } else {
          actions.setTouched({});
          nextStep();
        }
      }}
    >
      {({ errors, handleChange, values, isValid, setFieldValue }) => (
        <div className="flex w-full h-screen overflow-hidden">
          <div className="px-8 w-full md:w-1/2 flex flex-col justify-center divide-y divide-dashed gap-y-6">
            <div className="">
              <div className="flex items-center justify-center mb-6">
                <img width={120} src='brain-a.png' alt='Brain agr' />
              </div>
              <Form>
                {
                  step === 1 && (
                    <>
                      <Input onChange={handleChange} label="Nome do produtor" placeholder="Ex: Edmundo Neto" id="farmOwn" name="farmOwn" type="text" errors={errors} />
                      <div className="flex gap-4">
                        <Input onChange={handleChange} label="Nome da fazenda" placeholder="Ex: Fazenda ProVer" id="farmName" name="farmName" type="text" errors={errors} />
                        <InputMaskComponent onChange={handleChange} label="CPF/CNPJ" id="document" placeholder="Ex: 023.432.342-34" name="document" type="text" errors={errors} />
                      </div>
                      <div className="flex gap-4">
                        <SelectCustomComponent options={brasilianStates} setFieldValue={setFieldValue} onChange={handleChange} label="Estado" id="state" name="state" type="text" errors={errors} className="w-full" />
                        <Input onChange={handleChange} placeholder="Ex: Criciuma" label="Cidade" id="city" name="city" type="text" errors={errors} className="w-full" />
                      </div>
                      <div className="flex flex-row-reverse">
                        <button className="w-1/4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:bg-primary-dark focus:ring-opacity-50" type="submit" disabled={!isValid}>
                          Próximo
                        </button>
                      </div>
                    </>
                  )
                }
                {
                  step === 2 && (
                    <>
                      <HectaresInput onChange={handleChange} label="Área total" id="totalArea" name="totalArea" type="number" step="0.01" min="0" errors={errors} />
                      <HectaresInput onChange={handleChange} label="Área agricultável" id="agriculturalArea" name="agriculturalArea" type="number" step="0.01" min="0" errors={errors} />
                      <HectaresInput onChange={handleChange} label="Área de vegetação" id="vegetationArea" name="vegetationArea" type="number" step="0.01" min="0" errors={errors} />
                      <SelectGroupCustomComponent setFieldValue={setFieldValue} options={plantedCropsGroupedOptions} onChange={handleChange} isMulti={true} label="Culturas plantadas" id="plantedCrops" name="plantedCrops" errors={errors} />

                      <div className="flex flex-row-reverse gap-2">
                        <button type="submit" className="w-1/4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:bg-primary-dark focus:ring-opacity-50">
                          Guardar
                        </button>
                        <button className="w-1/4" type="button" onClick={prevStep}>
                          Voltar
                        </button>
                      </div>
                    </>
                  )
                }

              </Form>

            </div>
          </div>
          <div className="bg-primary w-full md:w-1/2 hidden md:block">
            {
              step === 2 && (
                <FarmAreaChart
                  totalArea={100}
                  agriculturalArea={Number(values?.agriculturalArea)}
                  vegetationArea={Number(values?.vegetationArea)}
                />
              )
            }
          </div>
        </div>
      )}
    </Formik>
  )
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const FarmAreaChart = ({ agriculturalArea, vegetationArea }: any) => {
  const data = {
    labels: ['Agricultável', 'Vegetação'],
    datasets: [
      {
        label: 'Área da Fazenda',
        data: [agriculturalArea, vegetationArea],
        backgroundColor: ChartColors,
        hoverOffset: 4,
      },
    ],
  };


  return (
    <div className="w-full h-full flex justify-center pt-40">
      <div className="w-[60%] ">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
};