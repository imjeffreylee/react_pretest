const Crud = () => {
  return (
    <div style={{ margin: '25px' }}>
      <p>
        以我自己的經驗，最常見的API規格不外乎GET、POST、PUT、PATCH、DELETE。通常GET用來從後端取得資料，response時常會以array作為資料結構以傳輸多筆資料。參考範例如GET
        /api/v1/users。如果是要獲取單筆資料，常見的做法是在url中傳入id以利後端搜尋該筆資料，如GET
        /api/v1/user/:id。POST時常用於新增資料到後端，少數情況也用於修改資料（類似以新資料直接覆蓋的方式），在request時會需要傳入要新增的物件資料，如POST
        /api/v1/user，再加上data物件提供資料。常見的response會是剛剛新增完成的資料。PUT跟PATCH功能皆為修改資料，請求時需要欲修改資料的id及欲修改成的結果，PATCH
        /api/v1/user/:id，同樣以data傳輸資料，常見response會是修改過後的資料。DELETE用於刪除資料，請求時需要提供該筆資料id，DELETE
        /api/v1/user/:id，通常只回傳是否成功刪除。
      </p>
    </div>
  );
};

export default Crud;
