import { IFarm } from "../../common/data/farms"
import { FarmMap } from "./components/farm-map"

export function FarmViewFeature({ farm }: { farm: IFarm }) {
  const { id, dataCriacao, document, farmName, farmOwn, city, state, plantedCrops }: IFarm = farm

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="p-8 w-full md:w-1/2 flex flex-col divide-y divide-dashed gap-y-6">
        <div>
          <p className='"text-gray-800 font-semibold text-xl'>ID {id}</p>
          <p className='text-primary font-bold text-sm'>{dataCriacao}</p>
        </div>

        <div className="pt-5">
          <p className='"text-gray-800 font-semibold text-xl'>{farmOwn}</p>
          <p className='text-primary font-bold text-sm'>{document}</p>
          <p className='text-primary font-bold text-sm'>{farmName}</p>
        </div>

        <div className="pt-5">
          <p className='"text-gray-800 font-semibold text-xl'>Estado de {state.label}</p>
          <p className='text-primary font-bold text-sm'>{city}</p>
        </div>

        <div className="pt-5">
          <p className='"text-gray-800 font-semibold text-xl'>Culturas</p>
          <div>
            {
              plantedCrops.map((el) => <span className='text-primary font-bold text-sm'>{el.value} </span>)
            }
          </div>

        </div>

      </div>
      <div className="w-full md:w-1/2 hidden md:block">
        <FarmMap farms={[farm]} />
      </div>
    </div >
  )
}