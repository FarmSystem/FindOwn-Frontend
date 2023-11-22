import {
  Container,
  Option,
  LightCare,
  NavService,
  ListContainer
} from './style';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brightVersion from '../../assets/images/bright_version.svg';
import darkVersion from '../../assets/images/night_version.svg';
import { ExampleBox } from '../../components/ItemBox';
import { StyledComponent } from '@emotion/styled';

// interface ArrayProps {
//   items: any[];
// }

export const List = () => {
  const navigate = useNavigate();
  const [ bright, setBright ] = useState(true);
  const toggleBright = () => {
    setBright(!bright);
  };
  const Items = Array(5).fill(0);

  const chunkArray = (arr: any[], size: number) => {
    return Array.from({length: Math.ceil(arr.length / size)}, (_, index) => 
      arr.slice(index * size, index * size + size)
    );
  };

  const chunkedItems = chunkArray(Items, 3);

  return(
    <Container>
      <Option>
        <LightCare onClick={toggleBright} src={bright ? brightVersion : darkVersion} />
        <NavService onClick={() => navigate(`/trademark`)}>상표 판단 바로가기</NavService>
      </Option>
      <ListContainer>
        {chunkedItems.map((row, rowIndex) => (
          <div key={rowIndex} >
            {row.map((item, colIndex) => (
              // <ExampleBox key={colIndex}/>
              <div key={colIndex}>
                {item }
              </div>
            ))}
          </div>
        ))}
      </ListContainer>
    </Container>
  );
};  