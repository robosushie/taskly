"use client";
import Titlebar from "@/components/dashboard/titlebar";
import {
  db,
  readDocument,
  removeDocument,
  writeDocument,
  updateDocument,
} from "@/firebase/db";
import { useAuthStore } from "@/store/auth-store";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const TaskSection: React.FC<{
  title: string;
  children: ReactNode;
  className: string;
}> = ({ title, children, className }) => {
  return (
    <div className=" h-full w-1/3 flex flex-col gap-2">
      <h1 className="font-montserrat text-lg text-white">{title}</h1>
      <div
        className={`${className} w-full grow bg-neutral-200 rounded-lg py-4 px-4 flex flex-col gap-2`}
      >
        {children}
      </div>
    </div>
  );
};

const Task: React.FC<{
  item: any;
  setShowTaskDialogBox: any;
  setFocusTask: any;
}> = ({ item, setShowTaskDialogBox, setFocusTask }) => {
  const { user } = useAuthStore();
  const [show, setShow] = useState(false);
  return (
    <div className="w-full font-montserrat overflow-hidden rounded-md text-sm  border-[1px] border-neutral-800">
      <div className="p-2 bg-white flex justify-between items-center">
        <div>{item.title}</div>
        <div className="h-full flex gap-2 items-center">
          <div
            className="h-5 aspect-square cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            )}
          </div>
          <div
            className="h-5 aspect-square cursor-pointer"
            onClick={async () => {
              setFocusTask(item);
              setShowTaskDialogBox(true);
              //   await removeDocument(user.uid, item.id);
            }}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
          </div>
          <div
            className="h-5 aspect-square cursor-pointer"
            onClick={async () => {
              setFocusTask(item);
              await removeDocument(user.uid, item.id);
              setFocusTask(null);
            }}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
            </svg>
          </div>
        </div>
      </div>
      {show && <div className="p-2 bg-neutral-100">{item.description}</div>}
    </div>
  );
};

const NewTaskDialogBox: React.FC<{ setShowTaskDialogBox: any; task: any }> = ({
  setShowTaskDialogBox,
  task,
}) => {
  const { user } = useAuthStore();
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [phase, setPhase] = useState(task ? task.phase : "IceBox");

  return (
    <div className="absolute z-100 backdrop-blur backdrop-brightness-50 w-full h-full flex justify-center items-center">
      <div className="w-[600px] bg-neutral-100 rounded-xl flex flex-col p-8 gap-6">
        <div
          className="font-poppins text-sm cursor-pointer"
          onClick={() => {
            setShowTaskDialogBox(false);
          }}
        >
          Close
        </div>
        <div className="w-full flex flex-col grow gap-4">
          <div className="w-full flex flex-col">
            <p className="text-xs">Title</p>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="bg-transparent border-[1px] rounded text-sm p-2 border-neutral-800 focus:border-black text-neutral-800 focus:text-black outline-none"
              placeholder="Enter Email"
            />
          </div>
          <div className="w-full flex flex-col">
            <p className="text-xs">Description</p>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="bg-transparent border-[1px] rounded text-sm p-2 border-neutral-800 focus:border-black text-neutral-800 focus:text-black outline-none"
              placeholder="Enter Description"
            />
          </div>
          <div className="w-full flex flex-col">
            <p className="text-xs">Select Phase</p>
            <select
              value={phase}
              onChange={(e) => {
                setPhase(e.target.value);
              }}
              className={`rounded-xl py-1 px-4 ${
                phase == "IceBox"
                  ? "bg-blue-200"
                  : phase == "InProgress"
                  ? "bg-orange-200"
                  : "bg-green-200"
              }  w-56`}
            >
              <option className="bg-blue-200" value="IceBox">
                IceBox
              </option>
              <option className="bg-orange-200" value="InProgress">
                InProgress
              </option>
              <option className="bg-green-200" value="Completed">
                Completed
              </option>
            </select>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div
            className="bg-blue-500 w-44 py-2 rounded-full text-white flex justify-center cursor-pointer"
            onClick={async () => {
              if (task) {
                await updateDocument(user.uid, task.id, {
                  title: title,
                  description: description,
                  phase: phase,
                });
              } else {
                await writeDocument(user.uid, {
                  title: title,
                  description: description,
                  phase: phase,
                });
              }

              setShowTaskDialogBox(false);
            }}
          >
            {task ? "Update Task" : "Create Task"}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { user } = useAuthStore();
  const [showTaskDialogBox, setShowTaskDialogBox] = useState(false);
  const [focusTask, setFocusTask] = useState(null);
  const [iceBox, setIceBox] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        const task_list = await readDocument(user.uid);
        setIceBox(
          task_list.filter((obj: { phase: string }) => obj.phase == "IceBox")
        );
        setInProgress(
          task_list.filter(
            (obj: { phase: string }) => obj.phase == "InProgress"
          )
        );
        setCompleted(
          task_list.filter((obj: { phase: string }) => obj.phase == "Completed")
        );
      } catch {
        console.log("fetch error");
      }
    };

    fetchTaskList();
  }, [user, showTaskDialogBox, focusTask]);
  return (
    <main className="relative w-dvw h-dvh flex flex-col justify-start items-center bg-slate-800 gap-4 overflow-hidden">
      {showTaskDialogBox && (
        <NewTaskDialogBox
          setShowTaskDialogBox={setShowTaskDialogBox}
          task={focusTask}
        />
      )}

      <Titlebar />
      <div className="w-full px-8 lg:px-14 flex justify-start items-center">
        <div
          className="font-montserrat text-white bg-blue-500 py-1 px-4 rounded-full cursor-pointer"
          onClick={() => {
            setFocusTask(null);
            setShowTaskDialogBox(true);
          }}
        >
          + New Task
        </div>
      </div>
      <div className="px-8 pb-8 lg:px-14 flex flex-col lg:flex-row w-full grow gap-6">
        <TaskSection title="IceBox" className="bg-blue-100">
          {iceBox.map((item: any, idx) => {
            return (
              <Task
                key={idx}
                item={item}
                setShowTaskDialogBox={setShowTaskDialogBox}
                setFocusTask={setFocusTask}
              />
            );
          })}
        </TaskSection>
        <TaskSection title="In Progress" className="bg-orange-100">
          {inProgress.map((item: any, idx) => {
            return (
              <Task
                key={idx}
                item={item}
                setShowTaskDialogBox={setShowTaskDialogBox}
                setFocusTask={setFocusTask}
              />
            );
          })}
        </TaskSection>
        <TaskSection title="Completed" className="bg-green-100">
          {completed.map((item: any, idx) => {
            return (
              <Task
                key={idx}
                item={item}
                setShowTaskDialogBox={setShowTaskDialogBox}
                setFocusTask={setFocusTask}
              />
            );
          })}
        </TaskSection>
      </div>

      {/* <div className="base-padding flex w-full grow bg-blue-400"></div> */}
    </main>
  );
};

export default Dashboard;
