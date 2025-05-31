import {
  Button,
  DatePicker,
  Input,
  Modal,
  // Upload,
  type DatePickerProps,
} from "antd";

import { useReduxSelector } from "../../../hooks/useRedux";
import { useDispatch } from "react-redux";
import { setDebtsModalVisibility } from "../../../redux/modal-slice";
// import { PlusOutlined } from "@ant-design/icons";
// import { Image } from "antd";
// import type { GetProp, UploadFile, UploadProps } from "antd";
// import { useState } from "react";

// type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

// const getBase64 = (file: FileType): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });

const AddDebtModal = () => {
  const dispatch = useDispatch();
  const { addDebtsModalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );

  const handleClose = () => {
    dispatch(setDebtsModalVisibility({ open: false, isLoading: false }));
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Modal
        title="Title"
        footer={false}
        open={addDebtsModalVisibility.open}
        confirmLoading={addDebtsModalVisibility.isLoading}
        onCancel={handleClose}
      >
        <div className="flex flex-col gap-2 sm:gap-3">
          <Input className="!w-full  " placeholder="Ism kiriting..." />
          <Input
            addonBefore="+998"
            className="!w-full  "
            placeholder="Telefon raqam kiriting..."
          />
          <DatePicker onChange={onChange} placeholder="Sanani kiriting..." />
          <Input
            type="number"
            className="!w-full  "
            placeholder="Qarz midqorini kiriting..."
          />
          <Input className="!w-full" placeholder="Qarzni kim bermoqda ..." />

          <Button type="primary" variant="filled">
            {" "}
            <span className="text-lg font-[500] uppercase">Qo'shish</span>{" "}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AddDebtModal;
