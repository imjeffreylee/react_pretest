import { useEffect, useState } from 'react';

import list from '../data/list.json';
import { StyledCheckList } from '../components/styles/CheckList.styled';

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
      const { id: itemId, available } = item;
      if (isInRange(prevId, currId, itemId) && available)
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
    const allChecked = checkList
      .filter(({ available }) => available)
      .every(({ checked }) => checked);
    if (allChecked) return setAllChecked(true);
    setAllChecked(false);
  }, [checkList]);

  return (
    <StyledCheckList>
      <h4>Hold shift key to select multiple boxes</h4>
      <h4>Press the first box to toggle select all boxes</h4>
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
            <th>??????</th>
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
