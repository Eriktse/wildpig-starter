import Button from "antd/es/button";
import Modal from "antd/es/modal";
import { useState } from "react";


export const Welcome = () => {
    const [open, setOpen] = useState(false);    

    return <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onCancel={() => setOpen(false)} onOk={() => alert("让你ok了？")}>
            <div className="text-red-500">
                看见我是红色，说明tailwind生效了！
            </div>
        </Modal>
    </div>
}