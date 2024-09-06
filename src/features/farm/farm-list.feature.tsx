import { useEffect } from 'react';
import { useModal } from '../../context/modal-context';
import { IFarm } from '../../common/data/farms';
import { getDayAndWeekday } from '../../common/formatters/date';
import Button from '../../common/components/common/button';
import { fetchFarms } from './farm.slice';
import { FarmCard } from './components/farm-card';
import FarmRegisterFeature from './farm-register.feature';
import { useAppDispatch, useAppSelector } from '../../app/store.app';

const FarmListFeature = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.farms);
  const { openModal }: any = useModal();


  useEffect(() => {
    dispatch(fetchFarms());
  }, []);


  function handleRegister() {
    openModal(<FarmRegisterFeature />);
  };

  return (
    <div>
      <div className='mb-8 flex flex-row-reverse'>
        <Button
          label="Nova Fazenda"
          handleClick={handleRegister}
          styles="text-primary"
        />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-1 relative">
          {
            list.map((farm: IFarm) => {
              const d = getDayAndWeekday(farm.dataCriacao)

              return (
                (
                  <FarmCard
                    id={farm.id}
                    farmData={farm}
                    date={d.dayOfWeek}
                    day={d.dayOfMonth}
                    name={farm.farmName}
                    location={`${farm.city} | ${farm.state.value}`}
                  />
                )
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default FarmListFeature;