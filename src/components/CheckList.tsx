import { StyledCheckList } from './styles/CheckList.styled';
import list from '../data/list.json';
import { useEffect, useState } from 'react';

const CheckList = (): JSX.Element => {
  const [checkList, setCheckList] = useState(list);
  const [prevCheckedId, setPrevCheckedId] = useState(0);
  const [allChecked, setAllChecked] = useState(false);

  const isInRange = (prev: number, curr: number, idToCheck: number) => {
    if (prev < curr) {
      if (idToCheck <= curr && idToCheck > prev) return true;
    } else {
      if (idToCheck >= curr && idToCheck < prev) return true;
    }
    return false;
  };

  const handleBoxChecked = (id: number) => {
    setPrevCheckedId(id);

    const updatedList = checkList.map(item => {
      const { id: itemId, checked } = item;
      return itemId === id ? { ...item, checked: !checked } : item;
    });

    setCheckList(updatedList);
  };

  const handleShiftHoldBoxChecked = (prevId: number, currId: number) => {
    if (prevId === currId) return handleBoxChecked(currId);

    setPrevCheckedId(currId);
    const currIdCheckedStatus = checkList[currId - 1].checked;

    const updatedList = checkList.map(item => {
      const { id: itemId } = item;
      if (isInRange(prevId, currId, itemId))
        return { ...item, checked: !currIdCheckedStatus };
      return item;
    });

    setCheckList(updatedList);
  };

  const handleAllChecked = () => {
    const updatedList = checkList.map(item => ({
      ...item,
      checked: !allChecked,
    }));
    setCheckList(updatedList);
  };

  useEffect(() => {
    const allChecked = checkList.every(({ checked }) => checked);
    if (allChecked) return setAllChecked(true);
    setAllChecked(false);
  }, [checkList]);

  return (
    <StyledCheckList>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleAllChecked}
                checked={allChecked}
              />
            </th>
            <th className="space"></th>
            <th>狀態</th>
          </tr>
        </thead>
        <tbody>
          {checkList.length > 0 &&
            checkList.map(({ id, available, name, checked }, index) => (
              <tr key={id} className={index % 2 !== 0 ? 'grey-row' : ''}>
                <td>
                  {available && (
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={e => {
                        (e.nativeEvent as PointerEvent).shiftKey
                          ? handleShiftHoldBoxChecked(prevCheckedId, id)
                          : handleBoxChecked(id);
                      }}
                    />
                  )}
                </td>
                <td></td>
                <td>{name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </StyledCheckList>
  );
};

export default CheckList;
