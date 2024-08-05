import { Button, Table } from "antd";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PrintButton = ({ columns, dataSource }) => {
    const tableRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => tableRef.current,
      });
return(
    <>
     <Button className="bookingtbtn" onClick={handlePrint} style={{ marginBottom: 16 }}>
        Print
      </Button>
      <div ref={tableRef}>
        <Table columns={columns} dataSource={dataSource} />
      </div>
      </>
);
};

export default PrintButton;