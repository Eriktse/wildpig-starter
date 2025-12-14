import Button from "antd/es/button";
import Modal from "antd/es/modal";
import { useEffect, useState } from "react";


export const Welcome = () => {
    const [open, setOpen] = useState(false);    
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        fetch("/api/hello", {
            method: "POST",
            body: JSON.stringify({ name: "请求热重载这对吗？" }),
        }).then(res => res.json()).then(data => setData(data));
    }, []);

    return <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onCancel={() => setOpen(false)} onOk={() => alert("让你ok了？")}>
            <div className="text-red-500">
                看见我是红色，说明tailwind生效了！
            </div>
            {JSON.stringify(data, null, 2)}
        </Modal>
    </div>
}