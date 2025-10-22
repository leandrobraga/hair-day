import Text from "../components/text";

interface TitleLeftProps {
  title: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: TitleLeftProps) {
  return (
    <div className="flex flex-col gap-4">
      <Text className="text-gray-100 " variant="body-lg-bold">
        {title}
      </Text>
      <Text className="text-gray-300" variant="body-sm-regular">
        {subtitle}
      </Text>
    </div>
  );
}
