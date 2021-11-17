import * as S from "./style";

type Props = {
  data: string[];
};

const Dropdown = ({ data }: Props) => {
  return (
    <S.Select>
      {data.map((item, key) => (
        <S.Option value={item} key={key}>
          {item}
        </S.Option>
      ))}
    </S.Select>
  );
};

export default Dropdown;
