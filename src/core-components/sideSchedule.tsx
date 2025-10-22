import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon-stars.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import BinIcon from "../assets/icons/trash.svg?react";
import Icon from "../components/icon";
import Select from "../components/select";
import Text from "../components/text";
import Title from "./title";

export default function SideSchedule() {
  return (
    <>
      <div className="flex flex-col gap-4 m-2 md:m-5 p-36 pt-15">
        <div className="flex items-center justify-between gap-5">
          <Title
            title="Sua agenda"
            subtitle="Consulte os seus cortes de cabelo agendado por dia"
          />
          <Select />
        </div>
        <div>
          <div className="flex justify-between items-center border-1 border-gray-600 rounded-t-lg h-11">
            <div className="flex gap-2 pl-4">
              <Icon className="text-yellow-dark h-5 w-5" svg={SunIcon} />
              <Text className="text-gray-300" variant="body-sm-regular">
                Manhã
              </Text>
            </div>
            <div className="pr-4">
              <Text className="text-gray-300" variant="body-sm-regular">
                09h-12h
              </Text>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3 p-4 border-1 border-gray-600 rounded-b-lg">
            <div className="flex gap-5">
              <Text className="text-gray-200" variant="body-md-bold">
                11:00
              </Text>
              <Text className="text-gray-200" variant="body-md-regular">
                João da Silva
              </Text>
            </div>
            <Icon svg={BinIcon} className="text-yellow-dark w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center border-1 border-gray-600 rounded-t-lg h-11">
            <div className="flex gap-2 pl-4">
              <Icon className="text-yellow-dark h-5 w-5" svg={CloudSunIcon} />
              <Text className="text-gray-300" variant="body-sm-regular">
                Tarde
              </Text>
            </div>
            <div className="pr-4">
              <Text className="text-gray-300" variant="body-sm-regular">
                13h-18h
              </Text>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3 p-4 border-1 border-gray-600 rounded-b-lg">
            <div className="flex gap-5">
              <Text className="text-gray-200" variant="body-md-bold">
                13:00
              </Text>
              <Text className="text-gray-200" variant="body-md-regular">
                João da Silva
              </Text>
            </div>
            <Icon svg={BinIcon} className="text-yellow-dark w-5 h-5" />
          </div>
          <div className="flex justify-between items-center gap-3 p-4 border-1 border-gray-600 rounded-b-lg">
            <div className="flex gap-5">
              <Text className="text-gray-200" variant="body-md-bold">
                14:00
              </Text>
              <Text className="text-gray-200" variant="body-md-regular">
                Maria da Silva
              </Text>
            </div>
            <Icon svg={BinIcon} className="text-yellow-dark w-5 h-5" />
          </div>
          <div className="flex justify-between items-center gap-3 p-4 border-1 border-gray-600 rounded-b-lg">
            <div className="flex gap-5">
              <Text className="text-gray-200" variant="body-md-bold">
                16:00
              </Text>
              <Text className="text-gray-200" variant="body-md-regular">
                Pedro da Silva
              </Text>
            </div>
            <Icon svg={BinIcon} className="text-yellow-dark w-5 h-5" />
          </div>
          <div className="flex justify-between items-center gap-3 p-4 border-1 border-gray-600 rounded-b-lg">
            <div className="flex gap-5">
              <Text className="text-gray-200" variant="body-md-bold">
                17:00
              </Text>
              <Text className="text-gray-200" variant="body-md-regular">
                Silva e Silva
              </Text>
            </div>
            <Icon svg={BinIcon} className="text-yellow-dark w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center border-1 border-gray-600 rounded-t-lg h-11">
            <div className="flex gap-2 pl-4">
              <Icon className="text-yellow-dark h-5 w-5" svg={MoonIcon} />
              <Text className="text-gray-300" variant="body-sm-regular">
                Noite
              </Text>
            </div>
            <div className="pr-4">
              <Text className="text-gray-300" variant="body-sm-regular">
                19h-21h
              </Text>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3 p-4 border-1 border-gray-600 rounded-b-lg">
            <div className="flex gap-5">
              <Text className="text-gray-200" variant="body-md-bold">
                19:00
              </Text>
              <Text className="text-gray-200" variant="body-md-regular">
                Marina da Silva
              </Text>
            </div>
            <Icon svg={BinIcon} className="text-yellow-dark w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
}
