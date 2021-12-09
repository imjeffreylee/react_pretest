const list = new Array(13).fill('00-未派車');

const CheckList = () => {
  return (
    <div>
      <table>
        <th>
          <tr>
            <td></td>
            <td></td>
            <td>狀態</td>
          </tr>
        </th>
        <tbody>
          {list.length > 0 &&
            list.map(item => (
              <tr>
                <td></td>
                <td></td>
                <td>{item}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckList;
