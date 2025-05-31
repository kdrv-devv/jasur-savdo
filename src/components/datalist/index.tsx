import { Image, List, Table, Tooltip, type TableProps } from "antd";
import type { PeopleListType } from "../../@types";
import { FaRegEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

const DataList = ({
  columns,
  data,
}: {
  columns: TableProps<PeopleListType>["columns"];
  data: PeopleListType[];
}) => {
  return (
    <>
      <Table<PeopleListType>
        className="!w-full shadow-lg hidden md:block mt-4"
        columns={columns}
        dataSource={data}
      />

      <List
        className="block md:hidden mt-4"
        grid={{ gutter: 16, column: 1 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <div className="w-full shadow-md flex flex-col gap-2 bg-[#fff] p-4 rounded-md">
              <div className="flex items-end justify-between border-b pb-1">
                <p>ID</p>
                <p>{item.id}</p>
              </div>
              <div className="flex items-end justify-between border-b pb-1">
                <p>Ismi</p>
                <p>{item.name}</p>
              </div>
              <div className="flex items-end justify-between border-b pb-1">
                <p>Mijoz haqida</p>
                <p>{item.client_description}</p>
              </div>

              <div className="flex items-end justify-between border-b pb-1">
                <p>Telefon raqami</p>
                <p>{item.client_phone_number}</p>
              </div>

              <div className="flex items-end justify-between border-b pb-1">
                <p>Berilgan sanasi</p>
                <p>{item.given_date}</p>
              </div>
              <div className="flex items-end justify-between border-b pb-1">
                <p>Miqdori</p>
                <p>{item.sum}</p>
              </div>

              <div className="flex items-end justify-between border-b pb-1">
                <p>Mijoz rasmi</p>
                <Image
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  width={40}
                  height={40}
                  src={item.image}
                  fallback="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                />
              </div>

              <div className="flex items-end justify-between border-b pb-1">
                <p>Amallar</p>
                <div className="flex   items-center gap-2">
                  <Tooltip
                    title="To'liq ko'rish "
                    color="#b1abab"
                  >
                    <button className="h-7 w-7 flex shadow-md items-center justify-center text-white rounded-full bg-[#9d9595cb]">
                      <FaRegEye className="text-lg text-shadow-2xs" />
                    </button>
                  </Tooltip>

                  <Tooltip
                    title="Taxrirlash "
                    color="#5aff5a"
                  >
                    <button className="h-7 w-7 flex shadow-md items-center justify-center text-white rounded-full bg-[#5aff5a]">
                      <MdEdit className="text-lg text-shadow-2xs" />
                    </button>
                  </Tooltip>

                  <Tooltip
                    title="O'chirish"
                    color="#ff3434"
                  >
                    <button className="h-7 w-7 flex shadow-md items-center justify-center text-white rounded-full bg-[#ff3434]">
                      <MdDelete className="text-lg text-shadow-2xs" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </>
  );
};

//  id: 1,
//       key: "1",
//       name: "John Brown",
//       age: 32,
//       address: "New York No. 1 Lake Park",
//       tags: ["nice", "developer"],

export default DataList;
