import { ReactNode } from "react";

export default function Modal(props: {
  children: ReactNode;
  modalName: string;
}) {
  return (
    <dialog id={props.modalName} className="modal ">
      <div className="modal-box bg-white rounded-md">{props.children}</div>
      <form method="dialog" className="modal-backdrop">
        <button className="focus:bg-transparent">close</button>
      </form>
    </dialog>
  );
}
